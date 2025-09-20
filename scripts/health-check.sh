#!/bin/bash
# ERPNext Health Check Script
# Usage: ./health-check.sh [environment] [url]

set -e

ENVIRONMENT=${1:-prod}
BASE_URL=${2:-"http://35.199.145.237:8080"}
LOG_FILE="/var/log/erpnext-health.log"

# Logging function
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a $LOG_FILE
}

# Health check functions
check_http_response() {
    local url=$1
    local expected_status=${2:-200}
    
    local status_code=$(curl -s -o /dev/null -w "%{http_code}" --connect-timeout 10 "$url")
    
    if [ "$status_code" -eq "$expected_status" ]; then
        return 0
    else
        return 1
    fi
}

check_database() {
    log "Checking database connectivity..."
    
    if docker exec erpnext-db-1 mysqladmin ping -h localhost -u root -padmin > /dev/null 2>&1; then
        log "✅ Database is healthy"
        return 0
    else
        log "❌ Database connection failed"
        return 1
    fi
}

check_application() {
    log "Checking application health..."
    
    if check_http_response "$BASE_URL" 200; then
        log "✅ Application is responding"
        return 0
    else
        log "❌ Application is not responding"
        return 1
    fi
}

check_containers() {
    log "Checking container status..."
    
    local containers=("erpnext-backend-1" "erpnext-frontend-1" "erpnext-db-1" "erpnext-redis-cache-1" "erpnext-redis-queue-1")
    local all_healthy=true
    
    for container in "${containers[@]}"; do
        if docker ps | grep -q "$container.*Up"; then
            log "✅ $container is running"
        else
            log "❌ $container is not running"
            all_healthy=false
        fi
    done
    
    if [ "$all_healthy" = true ]; then
        return 0
    else
        return 1
    fi
}

check_disk_space() {
    log "Checking disk space..."
    
    local usage=$(df /opt/erpnext | awk 'NR==2 {print $5}' | sed 's/%//')
    
    if [ "$usage" -lt 90 ]; then
        log "✅ Disk usage is healthy: ${usage}%"
        return 0
    else
        log "❌ Disk usage is critical: ${usage}%"
        return 1
    fi
}

check_memory() {
    log "Checking memory usage..."
    
    local total=$(free -m | awk 'NR==2{print $2}')
    local used=$(free -m | awk 'NR==2{print $3}')
    local usage=$((used * 100 / total))
    
    if [ "$usage" -lt 85 ]; then
        log "✅ Memory usage is healthy: ${usage}%"
        return 0
    else
        log "❌ Memory usage is high: ${usage}%"
        return 1
    fi
}

check_cpu() {
    log "Checking CPU usage..."
    
    local usage=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | awk -F'%' '{print $1}')
    
    if (( $(echo "$usage < 80" | bc -l) )); then
        log "✅ CPU usage is healthy: ${usage}%"
        return 0
    else
        log "❌ CPU usage is high: ${usage}%"
        return 1
    fi
}

check_queues() {
    log "Checking queue status..."
    
    # Check if there are failed jobs
    local failed_jobs=$(docker exec erpnext-backend-1 bench --site frontend get-failed-jobs 2>/dev/null | wc -l)
    
    if [ "$failed_jobs" -eq 0 ]; then
        log "✅ No failed jobs in queue"
        return 0
    else
        log "❌ $failed_jobs failed jobs found"
        return 1
    fi
}

# Main health check
main() {
    log "Starting health check for $ENVIRONMENT environment ($BASE_URL)"
    
    local overall_health=true
    local checks=(
        "check_containers"
        "check_database"
        "check_application"
        "check_disk_space"
        "check_memory"
        "check_cpu"
        "check_queues"
    )
    
    for check in "${checks[@]}"; do
        if ! $check; then
            overall_health=false
        fi
    done
    
    if [ "$overall_health" = true ]; then
        log "🎉 All health checks passed for $ENVIRONMENT environment"
        exit 0
    else
        log "💥 Health check failed for $ENVIRONMENT environment"
        
        # Send alert notification
        if command -v curl > /dev/null 2>&1 && [ -n "$SLACK_WEBHOOK_URL" ]; then
            curl -X POST -H 'Content-type: application/json' \
                --data "{\"text\":\"🚨 ERPNext health check failed for $ENVIRONMENT environment ($BASE_URL)\"}" \
                $SLACK_WEBHOOK_URL 2>/dev/null || true
        fi
        
        exit 1
    fi
}

# Run health check
main "$@"
