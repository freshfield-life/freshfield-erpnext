# Governance & Safety — Guardrails for All Phases

- **Change Control**: all code via PRs; high-risk config via change tickets
- **Kill Switch**: environment flag to disable all agent writes instantly
- **Audit Trail**: log prompts, tool calls, diffs, approver identity
- **PII/Secrets**: store in GCP Secret Manager; never in code or logs
- **Rate Limits**: per-tool limits to avoid runaway costs or API bans
- **Escalation**: incident runbook; rollback plan; on-call rotation (solo-friendly)
