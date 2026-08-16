# Athena OS

Athena OS is an AI operating system for Amazon businesses. The first release is an internal alpha for one operator.

## Core loop
Data → Normalize → Events → Memory → Reasoning → Decision → Policy → Approval → Execution → Outcome → Learning.

## Local run
`docker compose up --build`

- Web: http://localhost:3000
- API: http://localhost:8000/docs
- Health: http://localhost:8000/health

See `docs/ARCHITECTURE.md` for the system design.