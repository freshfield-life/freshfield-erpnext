#!/bin/bash
# Deploy Monitoring to All Environments
# Usage: ./deploy-monitoring.sh

set -e

ENVIRONMENTS=(
    "dev:34.19.98.34:8080"
    "staging:34.169.224.70:8080"
    "prod:35.199.145.237:8080"
)

SSH_KEY="~/.ssh/freshfield_erpnext"
LOG_FILE="/var/log/erpnext-monitoring-deploy.log"

# Logging function
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a $LOG_FILE
}

# Deploy to environment
deploy_to_environment() {
    local env_info=$1
    local env_name=$(echo $env_info | cut -d: -f1)
    local env_ip=$(echo $env_info | cut -d: -f2)
    local env_port=$(echo $env_info | cut -d: -f3)
    
    log "Deploying monitoring to $env_name environment ($env_ip:$env_port)"
    
    # Copy scripts to server
    scp -i $SSH_KEY -o StrictHostKeyChecking=no scripts/*.sh ubuntu@$env_ip:/opt/scripts/
    
    # Deploy monitoring setup
    ssh -i $SSH_KEY ubuntu@$env_ip "cd /opt/scripts && sudo ./setup-monitoring.sh $env_name"
    
    # Deploy backup script
    ssh -i $SSH_KEY ubuntu@$env_ip "cd /opt/scripts && sudo ./backup-database.sh $env_name"
    
    # Test health check
    ssh -i $SSH_KEY ubuntu@$env_ip "cd /opt/scripts && ./health-check.sh $env_name http://$env_ip:$env_port"
    
    log "✅ Monitoring deployed successfully to $env_name environment"
}

# Main deployment function
main() {
    log "Starting monitoring deployment to all environments"
    
    for env_info in "${ENVIRONMENTS[@]}"; do
        deploy_to_environment "$env_info"
    done
    
    log "🎉 Monitoring deployment completed successfully for all environments"
    
    # Summary
    log "=== DEPLOYMENT SUMMARY ==="
    log "Development: http://34.19.98.34:9090 (Prometheus), http://34.19.98.34:3000 (Grafana)"
    log "Staging: http://34.169.224.70:9090 (Prometheus), http://34.169.224.70:3000 (Grafana)"
    log "Production: http://35.199.145.237:9090 (Prometheus), http://35.199.145.237:3000 (Grafana)"
    log "=========================="
}

# Run deployment
main "$@"
