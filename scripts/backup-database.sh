#!/bin/bash
# ERPNext Database Backup Script
# Usage: ./backup-database.sh [environment]

set -e

ENVIRONMENT=${1:-prod}
BACKUP_BUCKET="freshfield-erpnext-${ENVIRONMENT}-backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="backup_${TIMESTAMP}.sql"
LOG_FILE="/var/log/erpnext-backup.log"

# Logging function
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a $LOG_FILE
}

log "Starting database backup for $ENVIRONMENT environment"

# Check if Docker is running
if ! docker ps > /dev/null 2>&1; then
    log "ERROR: Docker is not running"
    exit 1
fi

# Check if ERPNext containers are running
if ! docker ps | grep -q "erpnext-db-1"; then
    log "ERROR: ERPNext database container is not running"
    exit 1
fi

# Create backup directory
mkdir -p /opt/backups

# Create database backup
log "Creating database backup..."
docker exec erpnext-db-1 mysqldump \
    -u root -padmin \
    --single-transaction \
    --routines \
    --triggers \
    --events \
    --hex-blob \
    --add-drop-database \
    --databases erpnext > /opt/backups/${BACKUP_FILE}

if [ $? -eq 0 ]; then
    log "Database backup created successfully: ${BACKUP_FILE}"
else
    log "ERROR: Database backup failed"
    exit 1
fi

# Compress backup
log "Compressing backup..."
gzip /opt/backups/${BACKUP_FILE}
BACKUP_FILE="${BACKUP_FILE}.gz"

# Upload to GCS
log "Uploading backup to GCS..."
gsutil cp /opt/backups/${BACKUP_FILE} gs://${BACKUP_BUCKET}/${ENVIRONMENT}/

if [ $? -eq 0 ]; then
    log "Backup uploaded successfully to gs://${BACKUP_BUCKET}/${ENVIRONMENT}/${BACKUP_FILE}"
else
    log "ERROR: Backup upload failed"
    exit 1
fi

# Verify backup integrity
log "Verifying backup integrity..."
gsutil cp gs://${BACKUP_BUCKET}/${ENVIRONMENT}/${BACKUP_FILE} /tmp/verify_backup.sql.gz
gunzip /tmp/verify_backup.sql.gz

# Check if SQL file is valid
if mysql -u root -padmin -e "SELECT 1;" < /tmp/verify_backup.sql > /dev/null 2>&1; then
    log "✅ Backup verification successful"
else
    log "❌ Backup verification failed"
    rm /tmp/verify_backup.sql
    exit 1
fi

# Cleanup local files
rm /tmp/verify_backup.sql
rm /opt/backups/${BACKUP_FILE}

# Cleanup old local backups (keep last 3)
cd /opt/backups
ls -t backup_*.sql.gz | tail -n +4 | xargs -r rm

log "Backup completed successfully for $ENVIRONMENT environment"
log "Backup file: gs://${BACKUP_BUCKET}/${ENVIRONMENT}/${BACKUP_FILE}"

# Send success notification (optional)
if command -v curl > /dev/null 2>&1; then
    curl -X POST -H 'Content-type: application/json' \
        --data "{\"text\":\"✅ ERPNext backup completed successfully for $ENVIRONMENT environment\"}" \
        $SLACK_WEBHOOK_URL 2>/dev/null || true
fi

exit 0
