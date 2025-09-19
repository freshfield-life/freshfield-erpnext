# Packaging the AI OS as SaaS (Later Phase)

## Tenancy
- Option A: Single control plane, per-tenant namespaces (indexes + config)
- Option B: Dedicated projects per tenant (higher isolation, more cost)

## Data Isolation
- Separate vector indexes and storage buckets
- Per-tenant encryption keys; no cross-tenant retrieval

## Provisioning
- “Create Tenant” task: seed index, baseline policies, default agents

## Pricing Levers
- Seats, API usage, automation level (Shadow/Assist/Autopilot), data volume

## Legal & Compliance
- Data Processing Agreement, retention policy, audit access
