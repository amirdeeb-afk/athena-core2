# ADR-0003: Decision-Centered Domain Model

## Status
Accepted

## Context
The primary value of Athena Core is not reporting data. The product must help the owner make better business decisions and execute approved actions.

## Decision
The central domain object will be Decision, with Mission, Goal, Event, Risk, and Opportunity supporting it.

## Consequences
- The product UX will prioritize decisions and missions.
- Dashboards are secondary and supportive.
- The memory system will record decisions and outcomes.
- The AI layer must produce explainable, confidence-scored decisions.
