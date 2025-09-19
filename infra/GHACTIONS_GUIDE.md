# GitHub Actions Guide — Terraform on GCP (Workload Identity Federation)

## Why WIF?
Avoid storing JSON keys. Use **Workload Identity Federation** to let GitHub Actions impersonate a GCP service account.

## One-time setup (in GCP)
1. Enable IAM Credentials API.
2. Create a service account (e.g., `terraform-deployer@PROJECT.iam.gserviceaccount.com`).
3. Grant roles (principle of least privilege; start with):
   - `roles/editor` (narrow later), `roles/storage.admin` (for state bucket), `roles/compute.admin` (or tighter set).
4. Create an OIDC **Workload Identity Pool** and **Provider** for GitHub:
   - Audience: `//iam.googleapis.com/projects/<PROJECT_NUMBER>/locations/global/workloadIdentityPools/<POOL>/providers/<PROVIDER>`
5. Allow principal set:
   - `principalSet://iam.googleapis.com/projects/<PROJECT_NUMBER>/locations/global/workloadIdentityPools/<POOL>/attribute.repository/<YOUR_ORG>/<YOUR_REPO>`
6. Allow SA to be impersonated by that principal set.

## Repo secrets (in GitHub → Settings → Secrets and variables → Actions)
- `GCP_WIF_PROVIDER` — full provider resource name
- `GCP_TF_SA` — service account email
- `TF_STATE_BUCKET` — GCS bucket for Terraform state
- `GCP_PROJECT_ID` — your project id
- (optional) `TF_REGION`, `TF_ZONE`

## Environments
Use GitHub environments (dev/staging/prod) if you want manual approvals before apply.
