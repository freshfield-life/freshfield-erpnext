# Full Program Roadmap — All Phases (Vanilla → AI OS)

This roadmap aligns Cursor AI’s context across **all phases** so it never loses the plot.

## Phase 0 — Infra Ready (GCP + Repos)
- GCP projects, DNS, TLS, backups (see `ENVIRONMENT_PLAN.md`)
- Repos: `freshfield-erp-docs` (this pack), later `freshfield-ai-os` (agents/connectors)
- Version lock: ERPNext v15 stable (see `VERSION_LOCK.md`)

## Phase 1 — Vanilla ERPNext (NOW)
- Scope: **no code**, **all modules enabled**, **Canada/PST**, **multi‑currency**, **subcontracting**
- Workstyle: zero‑code guided by Cursor (prompts + guardrails)
- Deliverables: clean config, QA, parallel-run, acceptance gates
- Refs: `MASTER_BUILD_SPEC.md`, `QA_TEST_CASES.md`, `ACCEPTANCE_GATES.md`

## Phase 2 — Integrations & Data Foundation (After gates are green)
- Shopify + Amazon **MCF** order flow mirrored in ERPNext
- Amazon **SP‑API** product/ASIN/offer/inventory sync
- Data foundation: **RAG layer** for ERPNext docs + SOPs + product catalog
- Controlled code allowed (connectors, ETL, doc indexers) with strict PR templates
- Refs: `PHASE2_AI_ROADMAP.md`, `RAG_LAYER_SPEC.md`, `AI_API_CONNECTOR_AGENT.md`

## Phase 3 — Agentic OS (Shadow → Assist → Autopilot)
- Orchestrator (LangGraph or CrewAI) + tool adapters (ERPNext API, SP‑API, Shopify Admin API)
- Agents: Demand Forecast, Replenishment, Inventory Hygiene, PPC/MMM (optional)
- Safety: validators, policy engine, change proposals, human approval
- Refs: `AGENT_ORCHESTRATION_PLAN.md`, `EVALUATION_FRAMEWORK.md`, `GOVERNANCE_AND_SAFETY.md`

## Phase 4 — Optimization & SaaS Packaging
- Observability, drift detection, continual eval
- Multi‑tenant packaging of the “AI OS”
- Refs: `OBSERVABILITY_RUNBOOK.md`, `AI_SAAS_PACKAGING.md`

### Automation Levels
- **L0 Shadow:** agents simulate only
- **L1 Assist:** create draft docs/transactions
- **L2 Autopilot (guarded):** auto-merge low‑risk, human review for high‑risk
- **L3 Autopilot+:** batched approvals, policy‑based escalation

**Rule for Cursor:** Work **only** within the current phase unless explicitly asked to advance. Always cite the doc for the phase you are executing.
