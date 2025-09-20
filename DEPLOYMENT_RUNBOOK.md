# Freshfield ERPNext Deployment Runbook

**Version:** 1.0  
**Last Updated:** September 20, 2025  
**Environment:** Dev, Staging, Production  

## Overview

This runbook provides step-by-step instructions for deploying and managing the Freshfield ERPNext system across all environments.

## Environment Details

| Environment | IP Address | Zone | Instance Type | Status |
|-------------|------------|------|---------------|--------|
| **Development** | 34.19.98.34 | us-west1-b | e2-standard-4 | ✅ Active |
| **Staging** | 34.169.224.70 | us-west1-c | e2-standard-4 | ✅ Active |
| **Production** | 35.199.145.237 | us-west1-a | e2-standard-8 | ✅ Active |

## Prerequisites

### Required Tools
- `gcloud` CLI configured
- `terraform` v1.6.6+
- `docker` and `docker-compose`
- SSH access to GCP instances
- GitHub Actions secrets configured

### Required Secrets
- `GCP_SA_KEY`: Service account JSON key
- `SSH_PRIVATE_KEY`: SSH private key for instance access

## Deployment Procedures

### 1. Infrastructure Deployment

#### Deploy Development Environment
```bash
cd infra/terraform/environments/dev
terraform init -backend-config="bucket=freshfield-erpnext-tfstate" -backend-config="prefix=env/dev"
terraform plan
terraform apply -auto-approve
```

#### Deploy Staging Environment
```bash
cd infra/terraform/environments/staging
terraform init -backend-config="bucket=freshfield-erpnext-tfstate" -backend-config="prefix=env/staging"
terraform plan
terraform apply -auto-approve
```

#### Deploy Production Environment
```bash
cd infra/terraform/environments/prod
terraform init -backend-config="bucket=freshfield-erpnext-tfstate" -backend-config="prefix=env/prod"
terraform plan
terraform apply -auto-approve
```

### 2. ERPNext Application Deployment

#### Manual Deployment
```bash
# Get environment IP
ENV_IP=$(cd infra/terraform/environments/[ENV] && terraform output -raw ip_address)

# Copy files
scp -i ~/.ssh/freshfield_erpnext frappe_docker/pwd.yml frappe_docker/.env ubuntu@$ENV_IP:/opt/erpnext/

# Deploy ERPNext
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker compose -f pwd.yml up -d"
```

#### Automated Deployment
- Push to `develop` branch → Auto-deploy to Dev
- Push to `main` branch → Auto-deploy to Staging → Production

### 3. Health Checks

#### Check Container Status
```bash
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker compose -f pwd.yml ps"
```

#### Check Application Health
```bash
curl -I http://$ENV_IP:8080
```

#### Check Database Health
```bash
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker exec erpnext-db-1 mysqladmin ping -h localhost -u root -padmin"
```

## Maintenance Procedures

### 1. Backup Operations

#### Manual Backup
```bash
# Get environment details
ENV_IP=$(cd infra/terraform/environments/[ENV] && terraform output -raw ip_address)
BACKUP_BUCKET=$(cd infra/terraform/environments/[ENV] && terraform output -raw backup_bucket)

# Create backup
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker exec erpnext-db-1 mysqldump -u root -padmin erpnext > backup_${TIMESTAMP}.sql"

# Upload to GCS
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && gsutil cp backup_${TIMESTAMP}.sql gs://$BACKUP_BUCKET/"

# Cleanup
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && rm backup_${TIMESTAMP}.sql"
```

#### Automated Backup
- Daily backups at 2 AM UTC via GitHub Actions
- 30-day retention policy
- Encrypted storage in GCS

### 2. Update Procedures

#### Update ERPNext Version
```bash
# Update docker-compose file
# Update ERPNEXT_VERSION in .env file

# Deploy update
scp -i ~/.ssh/freshfield_erpnext frappe_docker/pwd.yml frappe_docker/.env ubuntu@$ENV_IP:/opt/erpnext/
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker compose -f pwd.yml pull && docker compose -f pwd.yml up -d"
```

#### Update Infrastructure
```bash
cd infra/terraform/environments/[ENV]
terraform plan
terraform apply
```

### 3. Monitoring and Alerting

#### Check System Resources
```bash
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "htop"
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "df -h"
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "free -h"
```

#### Check Application Logs
```bash
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker compose -f pwd.yml logs"
```

#### Check Database Logs
```bash
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker compose -f pwd.yml logs db"
```

## Troubleshooting

### Common Issues

#### 1. Application Not Accessible
**Symptoms:** HTTP 404 or connection refused  
**Solutions:**
```bash
# Check container status
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker compose -f pwd.yml ps"

# Restart services
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker compose -f pwd.yml restart"

# Check firewall rules
gcloud compute firewall-rules list --filter="name:erp-vpc-allow-ssh-web"
```

#### 2. Database Connection Issues
**Symptoms:** Database connection errors  
**Solutions:**
```bash
# Check database container
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker compose -f pwd.yml logs db"

# Restart database
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker compose -f pwd.yml restart db"

# Check database health
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker exec erpnext-db-1 mysqladmin ping -h localhost -u root -padmin"
```

#### 3. High Resource Usage
**Symptoms:** Slow performance, high CPU/memory usage  
**Solutions:**
```bash
# Check resource usage
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "htop"

# Restart services
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker compose -f pwd.yml restart"

# Scale resources if needed
# Update instance type in terraform configuration
```

### Emergency Procedures

#### 1. Complete System Restart
```bash
# Stop all services
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker compose -f pwd.yml down"

# Start all services
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker compose -f pwd.yml up -d"
```

#### 2. Database Recovery
```bash
# Stop application
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker compose -f pwd.yml stop backend frontend"

# Restore from backup
BACKUP_FILE="backup_YYYYMMDD_HHMMSS.sql"
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker exec -i erpnext-db-1 mysql -u root -padmin erpnext < $BACKUP_FILE"

# Restart application
ssh -i ~/.ssh/freshfield_erpnext ubuntu@$ENV_IP "cd /opt/erpnext && docker compose -f pwd.yml start backend frontend"
```

#### 3. Infrastructure Recovery
```bash
# Recreate infrastructure
cd infra/terraform/environments/[ENV]
terraform destroy -auto-approve
terraform apply -auto-approve

# Redeploy application
# Follow deployment procedures above
```

## Security Procedures

### 1. Access Management
- SSH access via key-based authentication
- Service accounts with minimal permissions
- Regular access reviews

### 2. Data Protection
- Encrypted data in transit and at rest
- Regular backup verification
- Secure backup storage

### 3. Monitoring
- Security event monitoring
- Access log analysis
- Vulnerability scanning

## Compliance Procedures

### 1. Canadian Business Requirements
- HST/GST tax compliance
- Data residency requirements
- Business hour operations

### 2. Data Privacy
- GDPR compliance ready
- Data retention policies
- Privacy impact assessments

### 3. Audit Readiness
- Comprehensive audit trails
- Documentation maintenance
- Regular compliance reviews

## Contact Information

### Emergency Contacts
- **Primary:** Operations Team
- **Secondary:** Development Team
- **Escalation:** Project Manager

### Support Resources
- **Documentation:** This runbook
- **Monitoring:** GCP Console
- **Logs:** Application and system logs
- **Backups:** GCS buckets

---

**Last Updated:** September 20, 2025  
**Next Review:** October 20, 2025  
**Version:** 1.0
