# RAG Layer Specification — Knowledge for Humans & Agents

## Purpose
Make ERPNext configuration and operations **discoverable and trustworthy** via retrieval with citations.

## Corpora (Initial)
- **Official ERPNext docs** (subset already in docs repo; consider full ingestion)
- **Freshfield SOPs & policies** (inventory handling, subcontracting, returns)
- **Catalog knowledge** (items, SKUs, kits/BOMs, warehouses, vendor info)
- **Integration docs** (Shopify Admin API refs, Amazon SP‑API sections relevant to FBA/MCF)

## Pipeline
1) **Ingest**
   - Fetch Markdown/PDF/HTML → convert to clean Markdown
   - Normalize metadata: source, version, section, URL
2) **Chunk**
   - 400–800 token windows with overlap (keep tables intact)
3) **Embed**
   - Use a consistent embedding model; store vectors + metadata
4) **Index**
   - Vector DB (Weaviate / Chroma / PGVector). Single‑tenant at first; partition for SaaS later.
5) **Retrieve**
   - Top‑k by semantic + keyword hybrid; filter by source/version
6) **Generate**
   - Responses must **cite** source titles/sections; never invent fields
7) **Cache & Refresh**
   - Daily/weekly refresh; on‑demand re‑index for changed docs

## Query Rules
- Prefer most recent version for ERPNext v15
- Always return citations (title + section)
- For actions, route to **Assist** only (no writes) unless human approves

## Quality Gates
- **Faithfulness**: citation coverage ≥ 95%
- **Helpfulness**: answer contains concrete steps or links to the right UI paths
- **Latency**: p95 < 2.5s for top‑k=5 (local index)
