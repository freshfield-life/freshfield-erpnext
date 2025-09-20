#!/bin/bash

# Freshfield ERPNext Setup Script - Phase 1
# This script sets up ERPNext v15 with Canada/PST/CAD defaults

set -e

echo "🚀 Starting Freshfield ERPNext Phase 1 Setup"
echo "=============================================="

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker and try again."
    exit 1
fi

echo "✅ Docker is running"

# Create necessary directories
echo "📁 Creating directories..."
mkdir -p ./erpnext-data/sites
mkdir -p ./erpnext-data/logs

# Start the services
echo "🐳 Starting ERPNext services..."
docker-compose up -d

# Wait for services to be ready
echo "⏳ Waiting for services to be ready..."
sleep 30

# Check if ERPNext is accessible
echo "🔍 Checking ERPNext accessibility..."
max_attempts=30
attempt=1

while [ $attempt -le $max_attempts ]; do
    if curl -s http://localhost:8000 > /dev/null 2>&1; then
        echo "✅ ERPNext is accessible at http://localhost:8000"
        break
    else
        echo "⏳ Attempt $attempt/$max_attempts - Waiting for ERPNext to be ready..."
        sleep 10
        ((attempt++))
    fi
done

if [ $attempt -gt $max_attempts ]; then
    echo "❌ ERPNext failed to start within expected time"
    echo "📋 Checking logs..."
    docker-compose logs erpnext
    exit 1
fi

echo ""
echo "🎉 ERPNext Setup Complete!"
echo "=========================="
echo "🌐 Access ERPNext at: http://localhost:8000"
echo "👤 Default login:"
echo "   Username: Administrator"
echo "   Password: admin123"
echo ""
echo "📋 Next Steps:"
echo "1. Open http://localhost:8000 in your browser"
echo "2. Complete the Setup Wizard with Canada/PST/CAD settings"
echo "3. Follow the Phase 1 configuration checklist"
echo ""
echo "🛑 To stop ERPNext: docker-compose down"
echo "🔄 To restart ERPNext: docker-compose up -d"
