# Master Build Spec — Phase 1 (Vanilla ERPNext, Canada/PST)

**Goal:** Run ERPNext v15 (stable) in parallel with current tools, validate inventory and subcontracting flows, then gate into integrations.

- Locale: **Canada**, TZ: **PST**
- Currencies: **CAD** (base), transact in **CAD/USD/GBP/EUR**
- User: **Admin** (solo for now)
- Manufacturing: **Subcontracting** only (contract manufacturers)

## Scope
- Company, System & Global Defaults
- Taxes: Sales/Purchase Templates (e.g., HST 13% example)
- Multi‑currency: price lists per currency; seed exchange
- Stock: Items, UoM, Warehouses (Raw/FG/Vendor), batches/expiry if needed
- Subcontracting: FG with “Supply Raw Materials for Purchase”; BOMs without ops
- QA & Parallel run; backups and staging loop

## Phases
1) Setup Wizard → Post‑setup checks
2) Multi‑currency & taxes
3) Items/Warehouses/BOMs
4) Subcontracting dry run
5) QA suite & Parallel run
6) Acceptance gates

**No code** in Phase 1. No middleware. Minimal configuration only.
