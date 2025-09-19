# Environment Plan — GCP + Docker Compose

- Three VMs (dev/staging/prod), TLS, backups to GCS, monitoring
- Nightly backups; monthly restore tests in staging
- Patching dev → staging → prod; change log for all material changes
