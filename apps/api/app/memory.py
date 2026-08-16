from dataclasses import dataclass
from datetime import datetime, timezone
from uuid import UUID, uuid4

@dataclass(frozen=True)
class Event:
    type: str
    payload: dict
    id: UUID = uuid4()
    occurred_at: datetime = datetime.now(timezone.utc)

@dataclass
class BusinessMemory:
    facts: list[dict]
    decisions: list[dict]
    outcomes: list[dict]
    lessons: list[dict]

    def remember_fact(self, fact: dict): self.facts.append(fact)
    def remember_decision(self, decision: dict): self.decisions.append(decision)
    def remember_outcome(self, outcome: dict): self.outcomes.append(outcome)
    def remember_lesson(self, lesson: dict): self.lessons.append(lesson)
