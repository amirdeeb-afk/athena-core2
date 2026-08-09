# ADR-0001: Platform First

## Status
Accepted

## Context
Athena Core is intended to grow beyond a single application. The long-term vision includes multiple commerce applications sharing the same core intelligence layer.

## Decision
We will build Athena as a platform first, not as a single-purpose app.

## Consequences
- The core engine must be reusable.
- Connectors should be modular.
- Domain boundaries must be stable.
- Future apps such as SellerPilot, launch tools, and finance tools should reuse the same brain.
