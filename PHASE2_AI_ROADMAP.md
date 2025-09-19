# Phase 2 Roadmap — Integrations & Data Foundation

## Objectives
- Connect Shopify and Amazon (MCF + SP‑API) without middleware.
- Build a **RAG layer** so agents/humans can retrieve ERPNext docs, SOPs, and product knowledge reliably.
- Keep ERPNext as the system of record; integrations mirror flows into ERPNext.

## Milestones
1) **Repo & Guardrails**
   - Create `freshfield-ai-os` repo (code allowed here; keep docs repo no‑code).
   - Copy `AI_RULES_GUARDRAILS.md` → `CURSOR_RULES_PHASE2.md` (code‑aware).

2) **Connectors (Draft → QA → Merge)**
   - **Shopify**: Orders, fulfillments (MCF), catalog, inventory
   - **Amazon SP‑API**: Feeds, Listings, Inventory, Orders (read/write) as needed for FBA/MCF
   - ERPNext REST API adapters (read/write for Items, Orders, Stock Entries, etc.)

3) **Data Foundation**
   - RAG index: ERPNext docs, Freshfield SOPs, catalog, policies (chunked, embedded, versioned)
   - Retrieval policy: deterministic, cite sources, no write actions

4) **QA & Shadow Mode**
   - Dry‑run flows: Shopify→ERPNext, ERPNext→MCF, SP‑API sync
   - Golden test sets; diff vs current tools; runbooks for variances

5) **Assist Mode**
   - Drafts: replenishment suggestions, stock corrections, data hygiene tickets

## Success Criteria
- Round‑trip order/fulfillment mirrored in ERPNext
- Inventory states consistent across systems
- RAG answers doc‑cited, within latency budget
- No unapproved writes in production (shadow/assist only)
