# Athena OS Architecture v1

## System

Browser → Next.js Web → FastAPI API → Domain/Application services → PostgreSQL + Redis → Connectors → Amazon APIs.

AI is downstream of normalized business data. LLMs never receive Amazon credentials.

## Modules

- `domain`: business entities and invariants
- `application`: use cases and orchestration
- `connectors`: external systems such as Amazon
- `memory`: facts, decisions, outcomes and lessons
- `decision`: scoring, risk, confidence and expected impact
- `policy`: approval and automation guardrails
- `execution`: auditable actions with rollback metadata
- `workers`: background synchronization and analysis
- `web`: Mission Control and AI UX

## Core entities
Business, Brand, Product, Listing, Order, Inventory, Supplier, Campaign, Keyword, Goal, Mission, Opportunity, Risk, Decision, Action, Event, Experiment, Lesson, Policy, Automation, Approval, Execution, AuditLog.

## Decision lifecycle
1. Observe normalized state.
2. Create events.
3. Retrieve memory and related entities.
4. Generate decision candidates.
5. Evaluate expected impact, risk, confidence and reversibility.
6. Run policy checks.
7. Request approval when required.
8. Execute through a connector.
9. Record outcome.
10. Learn into memory.

## Safety laws
- Every consequential decision must be explainable.
- Automation is earned; default is approval required.
- Business rules outrank model creativity.
- Every execution is auditable.
- Kill switch must stop automated executions.
- Credentials remain in secret storage and outside model prompts.
