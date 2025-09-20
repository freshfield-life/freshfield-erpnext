# Backup and Monitoring Strategy

**Date:** September 20, 2025  
**Environment:** Dev, Staging, Production  
**Strategy:** Comprehensive backup and monitoring implementation  

## Backup Strategy

### 1. Database Backups

#### Automated Daily Backups
- **Frequency:** Daily at 2:00 AM UTC
- **Retention:** 30 days
- **Storage:** GCS buckets (encrypted)
- **Format:** SQL dump files

#### Backup Locations
```
gs://freshfield-erpnext-dev-backups/dev/
gs://freshfield-erpnext-staging-backups/staging/
gs://freshfield-erpnext-prod-backups/prod/
```

#### Backup Script
```bash
#!/bin/bash
# /opt/scripts/backup-database.sh

ENVIRONMENT=$1
BACKUP_BUCKET="freshfield-erpnext-${ENVIRONMENT}-backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="backup_${TIMESTAMP}.sql"

# Create database backup
docker exec erpnext-db-1 mysqldump \
    -u root -padmin \
    --single-transaction \
    --routines \
    --triggers \
    erpnext > /tmp/${BACKUP_FILE}

# Compress backup
gzip /tmp/${BACKUP_FILE}

# Upload to GCS
gsutil cp /tmp/${BACKUP_FILE}.gz gs://${BACKUP_BUCKET}/${ENVIRONMENT}/

# Cleanup local file
rm /tmp/${BACKUP_FILE}.gz

echo "Backup completed: ${BACKUP_FILE}.gz"
```

### 2. File System Backups

#### ERPNext Files Backup
```bash
#!/bin/bash
# /opt/scripts/backup-files.sh

ENVIRONMENT=$1
BACKUP_BUCKET="freshfield-erpnext-${ENVIRONMENT}-backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="files_${TIMESTAMP}.tar.gz"

# Create files backup
tar -czf /tmp/${BACKUP_FILE} /opt/erpnext/sites/

# Upload to GCS
gsutil cp /tmp/${BACKUP_FILE} gs://${BACKUP_BUCKET}/${ENVIRONMENT}/files/

# Cleanup local file
rm /tmp/${BACKUP_FILE}

echo "Files backup completed: ${BACKUP_FILE}"
```

### 3. Configuration Backups

#### Infrastructure Configuration
```bash
#!/bin/bash
# /opt/scripts/backup-config.sh

# Backup Terraform state
gsutil cp -r infra/terraform/ gs://freshfield-erpnext-config-backups/

# Backup Docker configurations
gsutil cp frappe_docker/pwd.yml gs://freshfield-erpnext-config-backups/
gsutil cp frappe_docker/.env gs://freshfield-erpnext-config-backups/

echo "Configuration backup completed"
```

### 4. Backup Verification

#### Backup Integrity Check
```bash
#!/bin/bash
# /opt/scripts/verify-backup.sh

ENVIRONMENT=$1
BACKUP_BUCKET="freshfield-erpnext-${ENVIRONMENT}-backups"

# Get latest backup
LATEST_BACKUP=$(gsutil ls gs://${BACKUP_BUCKET}/${ENVIRONMENT}/ | grep "backup_" | tail -1)

# Download and verify
gsutil cp ${LATEST_BACKUP} /tmp/verify_backup.sql.gz
gunzip /tmp/verify_backup.sql.gz

# Check SQL integrity
mysql -u root -padmin -e "SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'erpnext';" < /tmp/verify_backup.sql

if [ $? -eq 0 ]; then
    echo "✅ Backup verification successful"
else
    echo "❌ Backup verification failed"
    exit 1
fi

# Cleanup
rm /tmp/verify_backup.sql
```

## Monitoring Strategy

### 1. System Monitoring

#### Prometheus + Grafana Setup
```yaml
# monitoring/docker-compose.yml
version: '3.8'

services:
  prometheus:
    image: prom/prometheus
    container_name: prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/etc/prometheus/console_libraries'
      - '--web.console.templates=/etc/prometheus/consoles'

  grafana:
    image: grafana/grafana
    container_name: grafana
    ports:
      - "3000:3000"
    volumes:
      - grafana_data:/var/lib/grafana
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin

  node-exporter:
    image: prom/node-exporter
    container_name: node-exporter
    ports:
      - "9100:9100"
    volumes:
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
    command:
      - '--path.procfs=/host/proc'
      - '--path.rootfs=/rootfs'
      - '--path.sysfs=/host/sys'
      - '--collector.filesystem.mount-points-exclude=^/(sys|proc|dev|host|etc)($$|/)'

volumes:
  prometheus_data:
  grafana_data:
```

#### Prometheus Configuration
```yaml
# monitoring/prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "erpnext_rules.yml"

scrape_configs:
  - job_name: 'erpnext-servers'
    static_configs:
      - targets: ['34.19.98.34:9100', '34.169.224.70:9100', '35.199.145.237:9100']
    scrape_interval: 30s

  - job_name: 'erpnext-applications'
    static_configs:
      - targets: ['34.19.98.34:8080', '34.169.224.70:8080', '35.199.145.237:8080']
    metrics_path: '/api/method/frappe.monitor.get_metrics'
    scrape_interval: 60s

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093
```

### 2. Application Monitoring

#### ERPNext Health Checks
```python
# monitoring/erpnext_health_check.py
import requests
import json
import time
from datetime import datetime

class ERPNextHealthCheck:
    def __init__(self, base_url, username, password):
        self.base_url = base_url
        self.username = username
        self.password = password
        self.session = requests.Session()
        self.login()
    
    def login(self):
        login_url = f"{self.base_url}/api/method/login"
        data = {
            "usr": self.username,
            "pwd": self.password
        }
        response = self.session.post(login_url, data=data)
        if response.status_code == 200:
            print("✅ Login successful")
        else:
            print("❌ Login failed")
    
    def check_database(self):
        url = f"{self.base_url}/api/method/frappe.desk.query_report.run"
        data = {
            "report_name": "System Health Report",
            "filters": {}
        }
        response = self.session.post(url, json=data)
        return response.status_code == 200
    
    def check_queues(self):
        url = f"{self.base_url}/api/method/frappe.monitor.get_queue_status"
        response = self.session.get(url)
        if response.status_code == 200:
            data = response.json()
            return data.get('message', {}).get('failed_jobs', 0) == 0
        return False
    
    def check_disk_space(self):
        url = f"{self.base_url}/api/method/frappe.monitor.get_disk_usage"
        response = self.session.get(url)
        if response.status_code == 200:
            data = response.json()
            usage = data.get('message', {}).get('usage_percent', 100)
            return usage < 90
        return False
    
    def run_health_check(self):
        results = {
            'timestamp': datetime.now().isoformat(),
            'database': self.check_database(),
            'queues': self.check_queues(),
            'disk_space': self.check_disk_space()
        }
        
        all_healthy = all(results.values())
        results['overall_health'] = all_healthy
        
        return results

# Usage
environments = [
    {"name": "dev", "url": "http://34.19.98.34:8080"},
    {"name": "staging", "url": "http://34.169.224.70:8080"},
    {"name": "prod", "url": "http://35.199.145.237:8080"}
]

for env in environments:
    health_check = ERPNextHealthCheck(env["url"], "Administrator", "admin")
    results = health_check.run_health_check()
    print(f"{env['name'].upper()}: {results}")
```

### 3. Alerting System

#### Alert Rules
```yaml
# monitoring/erpnext_rules.yml
groups:
  - name: erpnext_alerts
    rules:
      - alert: ERPNextDown
        expr: up{job="erpnext-applications"} == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "ERPNext instance is down"
          description: "{{ $labels.instance }} has been down for more than 1 minute."

      - alert: HighCPUUsage
        expr: 100 - (avg by(instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High CPU usage detected"
          description: "CPU usage is above 80% on {{ $labels.instance }}"

      - alert: HighMemoryUsage
        expr: (node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / node_memory_MemTotal_bytes * 100 > 85
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High memory usage detected"
          description: "Memory usage is above 85% on {{ $labels.instance }}"

      - alert: DiskSpaceLow
        expr: (node_filesystem_size_bytes - node_filesystem_free_bytes) / node_filesystem_size_bytes * 100 > 90
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "Disk space is low"
          description: "Disk usage is above 90% on {{ $labels.instance }}"

      - alert: DatabaseConnectionFailed
        expr: erpnext_database_connections_failed > 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "Database connection failed"
          description: "Database connection failures detected on {{ $labels.instance }}"
```

#### Alertmanager Configuration
```yaml
# monitoring/alertmanager.yml
global:
  smtp_smarthost: 'smtp.gmail.com:587'
  smtp_from: 'alerts@freshfield.ai'

route:
  group_by: ['alertname']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 1h
  receiver: 'web.hook'

receivers:
  - name: 'web.hook'
    webhook_configs:
      - url: 'https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK'
        send_resolved: true

  - name: 'email'
    email_configs:
      - to: 'admin@freshfield.ai'
        subject: 'ERPNext Alert: {{ .GroupLabels.alertname }}'
        body: |
          {{ range .Alerts }}
          Alert: {{ .Annotations.summary }}
          Description: {{ .Annotations.description }}
          {{ end }}
```

### 4. Log Management

#### Centralized Logging
```yaml
# monitoring/logging/docker-compose.yml
version: '3.8'

services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.15.0
    container_name: elasticsearch
    environment:
      - discovery.type=single-node
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ports:
      - "9200:9200"
    volumes:
      - elasticsearch_data:/usr/share/elasticsearch/data

  kibana:
    image: docker.elastic.co/kibana/kibana:7.15.0
    container_name: kibana
    ports:
      - "5601:5601"
    environment:
      - ELASTICSEARCH_HOSTS=http://elasticsearch:9200
    depends_on:
      - elasticsearch

  logstash:
    image: docker.elastic.co/logstash/logstash:7.15.0
    container_name: logstash
    volumes:
      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf
    ports:
      - "5044:5044"
    depends_on:
      - elasticsearch

volumes:
  elasticsearch_data:
```

#### Log Collection Script
```bash
#!/bin/bash
# /opt/scripts/collect-logs.sh

ENVIRONMENT=$1
LOGSTASH_HOST="your-logstash-host:5044"

# Collect ERPNext logs
docker logs erpnext-backend-1 > /tmp/erpnext-backend.log
docker logs erpnext-frontend-1 > /tmp/erpnext-frontend.log
docker logs erpnext-db-1 > /tmp/erpnext-db.log

# Send to Logstash
nc $LOGSTASH_HOST < /tmp/erpnext-backend.log
nc $LOGSTASH_HOST < /tmp/erpnext-frontend.log
nc $LOGSTASH_HOST < /tmp/erpnext-db.log

# Cleanup
rm /tmp/erpnext-*.log
```

## Implementation Timeline

### Week 1: Backup Implementation
- [ ] Set up automated database backups
- [ ] Configure file system backups
- [ ] Implement backup verification
- [ ] Test restore procedures

### Week 2: Basic Monitoring
- [ ] Deploy Prometheus and Grafana
- [ ] Configure system metrics collection
- [ ] Set up basic alerting
- [ ] Create monitoring dashboards

### Week 3: Advanced Monitoring
- [ ] Implement application health checks
- [ ] Set up centralized logging
- [ ] Configure advanced alerting
- [ ] Test monitoring systems

### Week 4: Optimization
- [ ] Fine-tune alert thresholds
- [ ] Optimize backup schedules
- [ ] Create runbooks for incidents
- [ ] Train operations team

## Monitoring Dashboards

### System Overview Dashboard
- CPU, Memory, Disk usage
- Network traffic
- System uptime
- Service status

### Application Dashboard
- Response times
- Error rates
- Database performance
- Queue status

### Business Metrics Dashboard
- User activity
- Transaction volumes
- System utilization
- Performance trends

## Backup Testing

### Monthly Restore Tests
```bash
#!/bin/bash
# /opt/scripts/test-restore.sh

ENVIRONMENT=$1
BACKUP_BUCKET="freshfield-erpnext-${ENVIRONMENT}-backups"

# Get latest backup
LATEST_BACKUP=$(gsutil ls gs://${BACKUP_BUCKET}/${ENVIRONMENT}/ | grep "backup_" | tail -1)

# Download backup
gsutil cp ${LATEST_BACKUP} /tmp/test_restore.sql.gz
gunzip /tmp/test_restore.sql.gz

# Create test database
mysql -u root -padmin -e "CREATE DATABASE test_restore;"

# Restore to test database
mysql -u root -padmin test_restore < /tmp/test_restore.sql

# Verify restore
mysql -u root -padmin -e "USE test_restore; SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'test_restore';"

# Cleanup
mysql -u root -padmin -e "DROP DATABASE test_restore;"
rm /tmp/test_restore.sql

echo "✅ Restore test completed successfully"
```

## Disaster Recovery

### RTO/RPO Targets
- **RTO (Recovery Time Objective):** 4 hours
- **RPO (Recovery Point Objective):** 1 hour
- **Backup Frequency:** Daily
- **Retention Period:** 30 days

### Recovery Procedures
1. **Assess** the disaster scope
2. **Notify** stakeholders
3. **Restore** from latest backup
4. **Verify** system functionality
5. **Monitor** for stability
6. **Document** incident

---

**Implementation Status:** Ready for deployment  
**Next Steps:** Deploy monitoring stack and configure alerting  
**Maintenance:** Regular testing and optimization required
