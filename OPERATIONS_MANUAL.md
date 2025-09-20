# Freshfield ERPNext Operations Manual

**Version:** 1.0  
**Last Updated:** September 20, 2025  
**Environment:** Production Operations  

## Overview

This manual provides comprehensive operational procedures for managing the Freshfield ERPNext system in production.

## System Architecture

### Infrastructure Components
- **Compute:** GCP Compute Engine (e2-standard-8)
- **Storage:** Persistent SSD (200GB)
- **Database:** MariaDB 10.6 (Containerized)
- **Web Server:** Nginx (Containerized)
- **Application:** ERPNext v15.79.0 (Containerized)
- **Cache:** Redis 6.2 (Containerized)
- **Queue:** Redis Queue (Containerized)

### Network Architecture
- **VPC:** erp-vpc (us-west1)
- **Subnet:** erp-vpc-subnet (10.10.0.0/24)
- **Firewall:** erp-vpc-allow-ssh-web
- **External IP:** 35.199.145.237

## Daily Operations

### 1. Morning Health Check (08:00 PST)

#### System Status Check
```bash
# Check all containers
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker compose -f pwd.yml ps"

# Check application health
curl -I http://35.199.145.237:8080

# Check database health
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker exec erpnext-db-1 mysqladmin ping -h localhost -u root -padmin"
```

#### Resource Monitoring
```bash
# Check CPU and memory usage
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "htop"

# Check disk usage
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "df -h"

# Check network connectivity
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "ping -c 3 8.8.8.8"
```

### 2. Backup Verification (09:00 PST)

#### Check Backup Status
```bash
# List recent backups
gsutil ls gs://freshfield-erpnext-prod-backups/prod/

# Verify backup integrity
BACKUP_FILE=$(gsutil ls gs://freshfield-erpnext-prod-backups/prod/ | tail -1)
gsutil cp $BACKUP_FILE /tmp/test_backup.sql
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker exec -i erpnext-db-1 mysql -u root -padmin -e 'SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = \"erpnext\";'"
```

### 3. Performance Monitoring (Hourly)

#### Application Performance
```bash
# Check response times
curl -w "@curl-format.txt" -o /dev/null -s http://35.199.145.237:8080

# Check database performance
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker exec erpnext-db-1 mysql -u root -padmin -e 'SHOW PROCESSLIST;'"
```

#### Resource Usage
```bash
# Monitor resource usage
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "top -bn1 | head -20"
```

## Weekly Operations

### 1. Security Review (Mondays)

#### Access Log Review
```bash
# Check SSH access logs
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "sudo grep 'sshd' /var/log/auth.log | tail -50"

# Check application access logs
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker compose -f pwd.yml logs frontend | grep -E '(ERROR|WARN)' | tail -20"
```

#### Security Updates
```bash
# Check for system updates
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "sudo apt list --upgradable"

# Check Docker image updates
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker compose -f pwd.yml pull"
```

### 2. Performance Analysis (Wednesdays)

#### Database Analysis
```bash
# Analyze database performance
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker exec erpnext-db-1 mysql -u root -padmin -e 'SHOW ENGINE INNODB STATUS;'"

# Check slow queries
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker exec erpnext-db-1 mysql -u root -padmin -e 'SHOW VARIABLES LIKE \"slow_query_log\";'"
```

#### Application Analysis
```bash
# Check application logs for errors
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker compose -f pwd.yml logs | grep -E '(ERROR|CRITICAL)' | tail -20"
```

### 3. Capacity Planning (Fridays)

#### Resource Utilization
```bash
# Check disk usage trends
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "df -h && du -sh /opt/erpnext/*"

# Check memory usage trends
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "free -h && cat /proc/meminfo | grep -E '(MemTotal|MemAvailable)'"
```

#### Growth Analysis
```bash
# Check database size
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker exec erpnext-db-1 mysql -u root -padmin -e 'SELECT table_schema AS \"Database\", ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS \"Size (MB)\" FROM information_schema.tables GROUP BY table_schema;'"
```

## Monthly Operations

### 1. Security Audit (First Monday)

#### Comprehensive Security Review
```bash
# Check system security
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "sudo ufw status verbose"

# Check file permissions
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "find /opt/erpnext -type f -perm /o+w"

# Check user accounts
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cat /etc/passwd | grep -E '(bash|sh)$'"
```

#### Vulnerability Assessment
```bash
# Check for known vulnerabilities
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "sudo apt list --upgradable | grep -E '(security|critical)'"

# Check Docker image vulnerabilities
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker images | grep -E '(frappe|mariadb|redis)'"
```

### 2. Disaster Recovery Test (Third Friday)

#### Backup Restoration Test
```bash
# Create test environment
# (Use staging environment for testing)

# Test backup restoration
BACKUP_FILE=$(gsutil ls gs://freshfield-erpnext-prod-backups/prod/ | tail -1)
gsutil cp $BACKUP_FILE /tmp/test_restore.sql

# Restore to test environment
# (Follow restoration procedures)
```

#### Failover Testing
```bash
# Test application restart
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker compose -f pwd.yml restart"

# Test database restart
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker compose -f pwd.yml restart db"
```

## Incident Response

### 1. Severity 1 - Critical (System Down)

#### Immediate Response
1. **Acknowledge** incident within 5 minutes
2. **Assess** system status
3. **Notify** stakeholders
4. **Begin** restoration procedures

#### Restoration Steps
```bash
# Check system status
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker compose -f pwd.yml ps"

# Restart all services
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker compose -f pwd.yml down && docker compose -f pwd.yml up -d"

# Verify restoration
curl -I http://35.199.145.237:8080
```

### 2. Severity 2 - High (Performance Issues)

#### Response Steps
1. **Monitor** system performance
2. **Identify** root cause
3. **Implement** temporary fix
4. **Plan** permanent solution

#### Performance Tuning
```bash
# Check resource usage
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "htop"

# Optimize database
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker exec erpnext-db-1 mysql -u root -padmin -e 'OPTIMIZE TABLE erpnext.tabDocType;'"
```

### 3. Severity 3 - Medium (Feature Issues)

#### Response Steps
1. **Document** issue
2. **Investigate** cause
3. **Implement** fix
4. **Test** solution

## Maintenance Windows

### 1. Scheduled Maintenance (Sundays 02:00-04:00 PST)

#### Pre-Maintenance Checklist
- [ ] Notify users 24 hours in advance
- [ ] Create backup
- [ ] Prepare rollback plan
- [ ] Test maintenance procedures

#### Maintenance Procedures
```bash
# Create backup
BACKUP_FILE="maintenance_backup_$(date +%Y%m%d_%H%M%S).sql"
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker exec erpnext-db-1 mysqldump -u root -padmin erpnext > $BACKUP_FILE"

# Apply updates
ssh -i ~/.ssh/freshfield_erpnext ubuntu@35.199.145.237 "cd /opt/erpnext && docker compose -f pwd.yml pull && docker compose -f pwd.yml up -d"

# Verify system
curl -I http://35.199.145.237:8080
```

#### Post-Maintenance Checklist
- [ ] Verify system functionality
- [ ] Check performance metrics
- [ ] Update documentation
- [ ] Notify users of completion

### 2. Emergency Maintenance

#### Emergency Procedures
1. **Assess** urgency
2. **Notify** stakeholders
3. **Execute** maintenance
4. **Verify** restoration
5. **Document** incident

## Monitoring and Alerting

### 1. Key Metrics

#### System Metrics
- CPU utilization < 80%
- Memory usage < 85%
- Disk usage < 90%
- Network latency < 100ms

#### Application Metrics
- Response time < 2 seconds
- Error rate < 1%
- Availability > 99.9%
- Database connections < 80%

### 2. Alert Thresholds

#### Critical Alerts
- System down
- Database unavailable
- Disk space > 95%
- Memory usage > 95%

#### Warning Alerts
- Response time > 5 seconds
- Error rate > 5%
- CPU usage > 80%
- Memory usage > 80%

### 3. Alert Response

#### Critical Alert Response
1. **Immediate** acknowledgment
2. **Assess** impact
3. **Notify** stakeholders
4. **Begin** restoration

#### Warning Alert Response
1. **Monitor** trends
2. **Investigate** cause
3. **Plan** remediation
4. **Implement** solution

## Documentation Maintenance

### 1. Regular Updates
- **Weekly:** Update operational procedures
- **Monthly:** Review and update runbooks
- **Quarterly:** Comprehensive documentation review

### 2. Change Management
- **Document** all changes
- **Version** control procedures
- **Notify** team of updates
- **Train** staff on changes

## Contact Information

### Emergency Contacts
- **Primary:** Operations Team Lead
- **Secondary:** Development Team Lead
- **Escalation:** Project Manager
- **Vendor:** ERPNext Support

### Support Resources
- **Documentation:** This manual
- **Monitoring:** GCP Console
- **Logs:** Application and system logs
- **Backups:** GCS buckets
- **Code:** GitHub repository

---

**Last Updated:** September 20, 2025  
**Next Review:** October 20, 2025  
**Version:** 1.0  
**Approved By:** Project Manager
