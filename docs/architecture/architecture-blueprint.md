# Athena Core Architecture Blueprint

## System goal

Athena Core is the shared brain behind SellerPilot. It models the business as a living system of goals, missions, decisions, events, and memories.

## Architectural layers

1. Presentation layer
   - SellerPilot web application
   - mission control UI
   - AI conversation UI

2. API layer
   - FastAPI service
   - authentication and authorization
   - request validation

3. Application layer
   - use cases
   - orchestration
   - policy checks
   - workflow coordination

4. Domain layer
   - business entities
   - value objects
   - domain events
   - invariants

5. AI layer
   - LangGraph orchestration
   - AI council
   - decision reasoning
   - recommendation generation

6. Data layer
   - PostgreSQL as the primary store
   - pgvector for semantic memory
   - Redis for caching and queueing

7. Integration layer
   - Amazon SP-API
   - Amazon Ads API
   - future marketplace connectors

## Key engines

- Knowledge Graph Engine
- Business Memory Engine
- Decision Engine
- Prediction Engine
- Mission Engine
- Automation Engine
- Policy Engine
- Communication Engine

## Core interaction flow

Observe -> Analyze -> Predict -> Decide -> Approve -> Execute -> Learn

## Design constraints

- The domain owns business logic.
- AI must never bypass the policy engine.
- Every action must be explainable.
- Every automation must be reversible when technically possible.
- The system must be able to expand to additional marketplaces later.
