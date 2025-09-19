# API Integrator Expert Agent — Shopify & Amazon SP‑API

## Goals
- Provide a **single agent** that can stand up and maintain integrations:
  - Shopify: Orders, Fulfillments (MCF), Products, Inventory
  - Amazon SP‑API: Listings/Feeds, Inventory, Orders (as needed for FBA/MCF)
  - ERPNext: Items, Price Lists, Orders, Stock Entries

## Principles
- Idempotent syncs; stateless tasks where possible
- Read‑heavy in Shadow mode; write only behind human approval
- Clear mapping tables; explicit conflict resolution policy

## High‑Level Tasks
- **Auth Setup**: guide OAuth/app setup (human completes credential screens)
- **Catalog Sync**: ERPNext ↔ Shopify/ASIN mapping (create mapping table doc)
- **Order Flow**: Shopify order → ERPNext SO/DN/SI → MCF request → tracking backfill
- **Inventory Sync**: FBA/Shopify stock → ERPNext warehouse levels with thresholds
- **Health Checks**: last sync time, error queues, retry policies

## Testing
- Golden fixtures for orders, returns, stock changes
- Shadow runs with diffs; log-only on first passes
- Safe toggles per integration (on/off per direction)

## Deliverables
- Connector modules (client wrappers), mapping docs, runbooks, and QA cases
