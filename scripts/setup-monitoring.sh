#!/bin/bash
# ERPNext Monitoring Setup Script
# Usage: ./setup-monitoring.sh [environment]

set -e

ENVIRONMENT=${1:-prod}
LOG_FILE="/var/log/erpnext-monitoring-setup.log"

# Logging function
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a $LOG_FILE
}

# Install required packages
install_packages() {
    log "Installing monitoring packages..."
    
    sudo apt update
    sudo apt install -y curl wget htop iotop nethogs bc
    
    # Install Docker if not present
    if ! command -v docker > /dev/null 2>&1; then
        log "Installing Docker..."
        curl -fsSL https://get.docker.com -o get-docker.sh
        sudo sh get-docker.sh
        sudo usermod -aG docker $USER
        rm get-docker.sh
    fi
    
    # Install Docker Compose if not present
    if ! command -v docker-compose > /dev/null 2>&1; then
        log "Installing Docker Compose..."
        sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
        sudo chmod +x /usr/local/bin/docker-compose
    fi
}

# Create monitoring directory structure
create_directories() {
    log "Creating monitoring directories..."
    
    sudo mkdir -p /opt/monitoring/{prometheus,grafana,alertmanager}
    sudo mkdir -p /opt/scripts
    sudo mkdir -p /var/log/erpnext
    sudo chown -R $USER:$USER /opt/monitoring
    sudo chown -R $USER:$USER /opt/scripts
}

# Create Prometheus configuration
setup_prometheus() {
    log "Setting up Prometheus..."
    
    cat > /opt/monitoring/prometheus/prometheus.yml << EOF
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "erpnext_rules.yml"

scrape_configs:
  - job_name: 'erpnext-node'
    static_configs:
      - targets: ['localhost:9100']
    scrape_interval: 30s

  - job_name: 'erpnext-app'
    static_configs:
      - targets: ['localhost:8080']
    metrics_path: '/api/method/frappe.monitor.get_metrics'
    scrape_interval: 60s

alerting:
  alertmanagers:
    - static_configs:
        - targets:
          - alertmanager:9093
EOF

    cat > /opt/monitoring/prometheus/erpnext_rules.yml << EOF
groups:
  - name: erpnext_alerts
    rules:
      - alert: ERPNextDown
        expr: up{job="erpnext-app"} == 0
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "ERPNext instance is down"
          description: "{{ \$labels.instance }} has been down for more than 1 minute."

      - alert: HighCPUUsage
        expr: 100 - (avg by(instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100) > 80
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High CPU usage detected"
          description: "CPU usage is above 80% on {{ \$labels.instance }}"

      - alert: HighMemoryUsage
        expr: (node_memory_MemTotal_bytes - node_memory_MemAvailable_bytes) / node_memory_MemTotal_bytes * 100 > 85
        for: 5m
        labels:
          severity: warning
        annotations:
          summary: "High memory usage detected"
          description: "Memory usage is above 85% on {{ \$labels.instance }}"

      - alert: DiskSpaceLow
        expr: (node_filesystem_size_bytes - node_filesystem_free_bytes) / node_filesystem_size_bytes * 100 > 90
        for: 5m
        labels:
          severity: critical
        annotations:
          summary: "Disk space is low"
          description: "Disk usage is above 90% on {{ \$labels.instance }}"
EOF
}

# Create Docker Compose for monitoring
setup_docker_compose() {
    log "Creating monitoring Docker Compose..."
    
    cat > /opt/monitoring/docker-compose.yml << EOF
version: '3.8'

services:
  prometheus:
    image: prom/prometheus:latest
    container_name: prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml
      - ./prometheus/erpnext_rules.yml:/etc/prometheus/erpnext_rules.yml
      - prometheus_data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/etc/prometheus/console_libraries'
      - '--web.console.templates=/etc/prometheus/consoles'
      - '--storage.tsdb.retention.time=30d'
      - '--web.enable-lifecycle'

  grafana:
    image: grafana/grafana:latest
    container_name: grafana
    ports:
      - "3000:3000"
    volumes:
      - grafana_data:/var/lib/grafana
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
      - GF_USERS_ALLOW_SIGN_UP=false
    depends_on:
      - prometheus

  node-exporter:
    image: prom/node-exporter:latest
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
      - '--collector.filesystem.mount-points-exclude=^/(sys|proc|dev|host|etc)(\$|/)'

  alertmanager:
    image: prom/alertmanager:latest
    container_name: alertmanager
    ports:
      - "9093:9093"
    volumes:
      - ./alertmanager/alertmanager.yml:/etc/alertmanager/alertmanager.yml
    command:
      - '--config.file=/etc/alertmanager/alertmanager.yml'
      - '--storage.path=/alertmanager'

volumes:
  prometheus_data:
  grafana_data:
EOF
}

# Create Alertmanager configuration
setup_alertmanager() {
    log "Setting up Alertmanager..."
    
    mkdir -p /opt/monitoring/alertmanager
    
    cat > /opt/monitoring/alertmanager/alertmanager.yml << EOF
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
EOF
}

# Setup cron jobs
setup_cron_jobs() {
    log "Setting up cron jobs..."
    
    # Make scripts executable
    chmod +x /opt/scripts/*.sh
    
    # Add cron jobs
    (crontab -l 2>/dev/null; echo "0 2 * * * /opt/scripts/backup-database.sh $ENVIRONMENT >> /var/log/erpnext-backup.log 2>&1") | crontab -
    (crontab -l 2>/dev/null; echo "*/5 * * * * /opt/scripts/health-check.sh $ENVIRONMENT >> /var/log/erpnext-health.log 2>&1") | crontab -
    (crontab -l 2>/dev/null; echo "0 0 * * 0 /opt/scripts/cleanup-logs.sh >> /var/log/erpnext-cleanup.log 2>&1") | crontab -
    
    log "Cron jobs configured successfully"
}

# Create log cleanup script
create_cleanup_script() {
    log "Creating log cleanup script..."
    
    cat > /opt/scripts/cleanup-logs.sh << 'EOF'
#!/bin/bash
# Log cleanup script

# Clean up old log files (keep last 30 days)
find /var/log/erpnext -name "*.log" -mtime +30 -delete

# Clean up old backups (keep last 7 days)
find /opt/backups -name "backup_*.sql.gz" -mtime +7 -delete

# Clean up Docker logs
docker system prune -f

echo "$(date): Log cleanup completed"
EOF

    chmod +x /opt/scripts/cleanup-logs.sh
}

# Start monitoring services
start_monitoring() {
    log "Starting monitoring services..."
    
    cd /opt/monitoring
    docker-compose up -d
    
    # Wait for services to start
    sleep 30
    
    # Check if services are running
    if docker ps | grep -q "prometheus.*Up" && docker ps | grep -q "grafana.*Up"; then
        log "✅ Monitoring services started successfully"
        log "Prometheus: http://localhost:9090"
        log "Grafana: http://localhost:3000 (admin/admin)"
    else
        log "❌ Failed to start monitoring services"
        exit 1
    fi
}

# Main setup function
main() {
    log "Starting monitoring setup for $ENVIRONMENT environment"
    
    install_packages
    create_directories
    setup_prometheus
    setup_alertmanager
    setup_docker_compose
    create_cleanup_script
    setup_cron_jobs
    start_monitoring
    
    log "🎉 Monitoring setup completed successfully for $ENVIRONMENT environment"
    log "Access Prometheus at: http://$(curl -s ifconfig.me):9090"
    log "Access Grafana at: http://$(curl -s ifconfig.me):3000"
}

# Run setup
main "$@"
