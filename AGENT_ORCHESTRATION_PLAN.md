# Agent Orchestration Plan — Shadow → Assist → Autopilot

## Framework
- **Orchestrator**: LangGraph (deterministic graphs) or CrewAI (role-based crews)
- **Tools**: ERPNext REST API client, Shopify Admin API client, Amazon SP‑API client, RAG Retriever, Policy/Validator

## Core Agents
1) **Inventory Hygiene Agent**
   - Fixes/Uplifts: missing UoM, bad price list entries, negative stock prevention
   - Output: draft issues or ERPNext Doc drafts (never auto-submit in Assist)

2) **Demand Forecast Agent** (optional early; can start simple)
   - Inputs: sales history, seasonality markers, promos
   - Output: SKU × warehouse forecasts with confidence

3) **Replenishment Agent**
   - Inputs: forecasts, lead times, MOQ, vendor constraints
   - Output: draft POs / stock transfer suggestions

4) **Integrator Agent**
   - Maintains connectors (Shopify, SP‑API); sync health checks; retries

5) **PPC/MMM Agent** (optional later)
   - Pulls ad performance; suggests budgets/keywords; writes tasks, not changes

## Safety & Policy
- **Levels**: L0 Shadow → L1 Assist → L2 Guarded Autopilot
- **Validator**: separate policy agent checks every proposed action
- **Human-in-the-loop**: required for any write in ERPNext/Shopify/SP‑API
- **Rollbacks**: changes expressed as PRs or change sets; reversible

## Dev Workflow
- Design → Tasks → Code → Unit tests → Draft PR → QA in staging → Merge → Shadow in prod → Assist
