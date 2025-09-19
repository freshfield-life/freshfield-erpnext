# Observability & Runbook

## What to Log
- Prompts, retrieved chunks (hash + title), tool calls, responses
- API error rates, retries, backoff events
- Change proposals and approvals

## Dashboards
- Sync lag per connector
- RAG hit-rate & latency
- Agent action queue (proposed/approved/merged)

## Runbook
- Triage flow for failing syncs
- How to disable a connector safely
- How to roll back a batch of changes
