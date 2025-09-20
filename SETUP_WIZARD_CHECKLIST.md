# ERPNext Setup Wizard Checklist - Phase 1

## Pre-Setup
- [ ] Docker is running
- [ ] ERPNext services are started (`./setup-erpnext.sh`)
- [ ] ERPNext is accessible at http://localhost:8000

## Setup Wizard Configuration

### Step 1: Basic Information
- [ ] **Company Name:** Freshfield ERPNext
- [ ] **Country:** Canada
- [ ] **Language:** English
- [ ] **Currency:** CAD (Canadian Dollar)
- [ ] **Time Zone:** America/Vancouver (PST)

### Step 2: User Information
- [ ] **Full Name:** Administrator
- [ ] **Email:** admin@freshfield.local
- [ ] **Password:** [Use secure password]
- [ ] **Confirm Password:** [Match above]

### Step 3: Database Configuration
- [ ] **Database Name:** erpnext
- [ ] **Database Root Password:** [Use from docker-compose.yml]
- [ ] **Database User:** erpnext
- [ ] **Database Password:** [Use from docker-compose.yml]

### Step 4: Site Configuration
- [ ] **Site Name:** erpnext.localhost
- [ ] **Site Administrator:** Administrator
- [ ] **Site Administrator Password:** [Use secure password]

### Step 5: Regional Settings
- [ ] **Country:** Canada
- [ ] **Time Zone:** America/Vancouver
- [ ] **Date Format:** DD-MM-YYYY
- [ ] **Time Format:** 12 Hour
- [ ] **Number Format:** 1,234.56

### Step 6: Currency Settings
- [ ] **Base Currency:** CAD
- [ ] **Currency Symbol:** $
- [ ] **Currency Position:** Before
- [ ] **Number of Decimals:** 2

### Step 7: Company Information
- [ ] **Company Name:** Freshfield ERPNext
- [ ] **Company Abbreviation:** FFE
- [ ] **Default Letter Head:** [Leave default for now]
- [ ] **Country:** Canada
- [ ] **Time Zone:** America/Vancouver

### Step 8: Modules Selection
- [ ] **Manufacturing** (Required for subcontracting)
- [ ] **Stock** (Required for inventory)
- [ ] **Accounting** (Required for financials)
- [ ] **Selling** (Required for sales)
- [ ] **Buying** (Required for purchasing)
- [ ] **HR** (Optional - can enable later)
- [ ] **Projects** (Optional - can enable later)
- [ ] **Support** (Optional - can enable later)

### Step 9: Sample Data
- [ ] **Load Sample Data:** Yes (For faster setup and multi-dev testing)

### Step 10: Final Configuration
- [ ] **Create Sample Data:** Yes
- [ ] **Install Apps:** ERPNext
- [ ] **Setup Complete:** Yes

## Post-Setup Verification
- [ ] Login successful with Administrator account
- [ ] Dashboard loads without errors
- [ ] Company settings show Canada/PST/CAD
- [ ] All required modules are enabled
- [ ] No error messages in the interface

## Next Steps After Setup
1. Configure multi-currency settings
2. Set up Canadian tax templates
3. Create warehouse structure
4. Configure items and UoM
5. Set up BOMs for subcontracting
6. Run QA test suite

## Troubleshooting
- If setup fails, check Docker logs: `docker-compose logs erpnext`
- If database connection fails, verify MariaDB is running: `docker-compose ps`
- If site creation fails, check site logs in the container
- For persistent issues, restart services: `docker-compose down && docker-compose up -d`
