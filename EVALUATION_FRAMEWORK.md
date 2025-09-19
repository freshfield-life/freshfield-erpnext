# Evaluation Framework — Offline & Online

## Offline
- Golden datasets (orders, stock events, taxes) with expected outputs
- Unit tests for parsers/mappers; simulation harness for agents
- Metrics: accuracy, coverage, latency, hallucination rate (RAG)

## Online (Shadow/Assist)
- Shadow diffs vs ground truth (current tools / manual entries)
- Approval rates; reverted changes; incident counts
- Weekly eval report; release gate based on thresholds
