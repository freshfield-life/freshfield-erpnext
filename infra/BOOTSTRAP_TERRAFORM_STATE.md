# Bootstrap: Terraform Remote State (GCS)

Create a bucket for Terraform state (one per org is fine):
```bash
gcloud storage buckets create gs://YOUR-TFSTATE-BUCKET --location=us --uniform-bucket-level-access
```

Then, when running `terraform init`, pass:
```
-backend-config="bucket=YOUR-TFSTATE-BUCKET" -backend-config="prefix=env/<dev|staging|prod>"
```
