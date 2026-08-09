# ADR-0002: Domain-Driven Design and Event-Driven Architecture

## Status
Accepted

## Context
Athena Core models a complex business domain with evolving requirements, multiple domain entities, and a need for traceable business events.

## Decision
We will use Domain-Driven Design for the codebase structure and Event-Driven Architecture for major state changes.

## Consequences
- Business logic stays inside the domain layer.
- Services coordinate use cases but do not own domain rules.
- Significant state changes are emitted as events.
- Future engines can react to events without tight coupling.
