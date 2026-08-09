# Athena Core Domain Model

## Core entities

### Business
The root aggregate. Represents Amir's Amazon business and its goals, constraints, and policies.

### Brand
A brand owned by the business.

### Product
A sellable asset with lifecycle, pricing, inventory, and review state.

### Goal
A measurable business objective.

### Mission
A prioritized set of decisions and actions aimed at a goal.

### Decision
A recommended or approved business action.

### Event
Something that has happened in the business.

### Opportunity
A possible improvement with expected impact.

### Risk
A condition that could harm profit, velocity, or stability.

### Inventory
Stock state, lead time, reorder needs, and stockout risk.

### Supplier
A manufacturing or fulfillment partner.

### Campaign
An advertising unit with budget, performance, and keyword structure.

### Review
A customer review with rating and sentiment signals.

### Forecast
A prediction about a future business state.

### Memory
Stored business history that influences future recommendations.

## Decision lifecycle

1. Observation
2. Evidence gathering
3. Analysis
4. Prediction
5. Decision
6. Approval
7. Execution
8. Outcome tracking
9. Learning
10. Memory update

## Domain rules

- Every mission must map to one or more goals.
- Every decision must carry confidence, impact, and risk.
- Every automation must be governed by policy.
- Every important event must be recorded in business memory.
- The business owner can override automation settings at any time.
