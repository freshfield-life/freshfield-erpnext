# Terraform on GCP — Skeleton (dev/staging/prod)

This skeleton creates:
- VPC + Subnet + firewall (22/80/443)
- One Ubuntu VM per environment with Docker & Compose installed
- A GCS bucket for backups per environment

## Layout
```
infra/
  terraform/
    modules/
      network/
      gce_docker_host/
      backup_bucket/
    environments/
      dev/
      staging/
      prod/
```

## Prereqs
- Terraform >= 1.6
- GCP project and billing enabled
- A **Terraform state bucket** (see `BOOTSTRAP_TERRAFORM_STATE.md`)
- Workload Identity Federation for GitHub Actions (see `GHACTIONS_GUIDE.md`)

## Usage (local)
```bash
cd infra/terraform/environments/dev
cp terraform.tfvars.example terraform.tfvars
# edit project_id, bucket name, region/zone
terraform init -backend-config="bucket=<your-tfstate-bucket>" -backend-config="prefix=env/dev"
terraform plan
terraform apply
```

## After apply
- Note the IP address output
- SSH in (OS Login or SSH key) and place your `docker-compose.yml` into `/opt/erpnext`
- `docker compose up -d`

## Hardening TODO
- Restrict SSH source ranges
- Add OS Login and IAM bindings to the instance service account
- Add Cloud DNS & managed certs if you want static hostnames
