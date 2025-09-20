# DNS and SSL Certificate Setup

**Date:** September 20, 2025  
**Environment:** Dev, Staging, Production  

## DNS Configuration

### Domain Structure
- **Production:** `erpnext.freshfield.ai`
- **Staging:** `staging-erpnext.freshfield.ai`
- **Development:** `dev-erpnext.freshfield.ai`

### DNS Records Required

#### A Records
```
erpnext.freshfield.ai.          A    35.199.145.237
staging-erpnext.freshfield.ai.  A    34.169.224.70
dev-erpnext.freshfield.ai.      A    34.19.98.34
```

#### CNAME Records (Optional)
```
www.erpnext.freshfield.ai.      CNAME erpnext.freshfield.ai.
```

### DNS Provider Setup

#### Cloudflare (Recommended)
1. **Add Domain:** Add `freshfield.ai` to Cloudflare
2. **Configure DNS:** Add A records as above
3. **Enable Proxy:** Enable Cloudflare proxy for security
4. **SSL/TLS:** Set to "Full (strict)" mode

#### Alternative: Google Cloud DNS
```bash
# Create DNS zone
gcloud dns managed-zones create freshfield-zone \
    --dns-name=freshfield.ai. \
    --description="Freshfield ERPNext DNS Zone"

# Add A records
gcloud dns record-sets create erpnext.freshfield.ai. \
    --zone=freshfield-zone \
    --type=A \
    --ttl=300 \
    --rrdatas=35.199.145.237

gcloud dns record-sets create staging-erpnext.freshfield.ai. \
    --zone=freshfield-zone \
    --type=A \
    --ttl=300 \
    --rrdatas=34.169.224.70

gcloud dns record-sets create dev-erpnext.freshfield.ai. \
    --zone=freshfield-zone \
    --type=A \
    --ttl=300 \
    --rrdatas=34.19.98.34
```

## SSL Certificate Setup

### Let's Encrypt with Certbot

#### Install Certbot
```bash
# On each server
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Install Docker plugin
sudo apt install python3-certbot-docker
```

#### Generate Certificates
```bash
# Production
sudo certbot certonly --standalone \
    -d erpnext.freshfield.ai \
    --email admin@freshfield.ai \
    --agree-tos \
    --non-interactive

# Staging
sudo certbot certonly --standalone \
    -d staging-erpnext.freshfield.ai \
    --email admin@freshfield.ai \
    --agree-tos \
    --non-interactive

# Development
sudo certbot certonly --standalone \
    -d dev-erpnext.freshfield.ai \
    --email admin@freshfield.ai \
    --agree-tos \
    --non-interactive
```

### Automated SSL with Docker

#### Create SSL Docker Compose
```yaml
# ssl-proxy.yml
version: '3.8'

services:
  nginx-proxy:
    image: nginxproxy/nginx-proxy
    container_name: nginx-proxy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/tmp/docker.sock:ro
      - certs:/etc/nginx/certs
      - vhost:/etc/nginx/vhost.d
      - html:/usr/share/nginx/html
    environment:
      - DEFAULT_HOST=erpnext.freshfield.ai

  letsencrypt:
    image: nginxproxy/acme-companion
    container_name: nginx-proxy-letsencrypt
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - certs:/etc/nginx/certs
      - vhost:/etc/nginx/vhost.d
      - html:/usr/share/nginx/html
    environment:
      - DEFAULT_EMAIL=admin@freshfield.ai

volumes:
  certs:
  vhost:
  html:
```

#### Update ERPNext Docker Compose
```yaml
# Add to pwd.yml
services:
  frontend:
    # ... existing config ...
    environment:
      - VIRTUAL_HOST=erpnext.freshfield.ai
      - LETSENCRYPT_HOST=erpnext.freshfield.ai
      - LETSENCRYPT_EMAIL=admin@freshfield.ai
    labels:
      - "com.github.jrcs.letsencrypt_nginx_proxy_companion.nginx_proxy=true"
```

### Manual SSL Configuration

#### Nginx Configuration
```nginx
# /etc/nginx/sites-available/erpnext
server {
    listen 80;
    server_name erpnext.freshfield.ai;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name erpnext.freshfield.ai;

    ssl_certificate /etc/letsencrypt/live/erpnext.freshfield.ai/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/erpnext.freshfield.ai/privkey.pem;

    # SSL Configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Security Headers
    add_header Strict-Transport-Security "max-age=63072000" always;
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Automated SSL Renewal

### Cron Job Setup
```bash
# Add to crontab
0 12 * * * /usr/bin/certbot renew --quiet --post-hook "docker restart nginx-proxy"
```

### Systemd Timer (Alternative)
```ini
# /etc/systemd/system/certbot-renew.timer
[Unit]
Description=Certbot Renewal Timer
[Timer]
OnCalendar=0 12 * * *
[Install]
WantedBy=timers.target
```

## Cloudflare SSL Configuration

### SSL/TLS Settings
1. **Encryption Mode:** Full (strict)
2. **Edge Certificates:** Universal SSL enabled
3. **Always Use HTTPS:** Enabled
4. **HTTP Strict Transport Security:** Enabled
5. **Minimum TLS Version:** 1.2

### Security Settings
1. **Security Level:** High
2. **Bot Fight Mode:** Enabled
3. **Challenge Passage:** 30 minutes
4. **Browser Integrity Check:** Enabled

## DNS Health Checks

### Monitoring Setup
```bash
# Create health check script
#!/bin/bash
# /opt/scripts/dns-health-check.sh

DOMAINS=(
    "erpnext.freshfield.ai"
    "staging-erpnext.freshfield.ai"
    "dev-erpnext.freshfield.ai"
)

for domain in "${DOMAINS[@]}"; do
    if curl -f -s "https://$domain" > /dev/null; then
        echo "✅ $domain is healthy"
    else
        echo "❌ $domain is down"
        # Send alert
    fi
done
```

### Automated Monitoring
```bash
# Add to crontab
*/5 * * * * /opt/scripts/dns-health-check.sh
```

## Implementation Steps

### Step 1: DNS Configuration
1. **Choose DNS Provider** (Cloudflare recommended)
2. **Add Domain** to DNS provider
3. **Configure A Records** for all environments
4. **Verify DNS Propagation** (can take up to 48 hours)

### Step 2: SSL Certificate Setup
1. **Install Certbot** on all servers
2. **Generate Certificates** for all domains
3. **Configure Nginx** with SSL
4. **Test SSL Configuration**

### Step 3: Automation
1. **Set up Auto-renewal** for certificates
2. **Configure Health Checks** for all domains
3. **Set up Monitoring** and alerting
4. **Test Failover** procedures

## Verification Commands

### DNS Verification
```bash
# Check DNS resolution
nslookup erpnext.freshfield.ai
dig erpnext.freshfield.ai

# Check from different locations
curl -I https://erpnext.freshfield.ai
```

### SSL Verification
```bash
# Check SSL certificate
openssl s_client -connect erpnext.freshfield.ai:443 -servername erpnext.freshfield.ai

# Check SSL grade
curl -s "https://api.ssllabs.com/api/v3/analyze?host=erpnext.freshfield.ai"
```

## Troubleshooting

### Common Issues

#### DNS Not Propagating
- **Check TTL** settings (lower for faster propagation)
- **Verify DNS records** are correct
- **Wait for propagation** (up to 48 hours)

#### SSL Certificate Issues
- **Check domain ownership** verification
- **Verify DNS resolution** before certificate generation
- **Check firewall** allows port 80 for verification

#### Mixed Content Issues
- **Update ERPNext** to use HTTPS
- **Check all resources** are served over HTTPS
- **Update hardcoded URLs** in configuration

## Security Considerations

### SSL/TLS Best Practices
1. **Use strong ciphers** (TLS 1.2+)
2. **Enable HSTS** headers
3. **Regular certificate renewal** (automated)
4. **Monitor certificate expiration**

### DNS Security
1. **Use DNSSEC** if supported
2. **Enable DNS filtering** (Cloudflare)
3. **Monitor DNS changes** for unauthorized modifications
4. **Use strong DNS provider** security features

---

**Next Steps:**
1. Configure DNS records with chosen provider
2. Generate SSL certificates
3. Update ERPNext configuration for HTTPS
4. Set up automated renewal and monitoring
5. Test all environments with new domains
