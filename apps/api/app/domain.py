from enum import Enum
from datetime import datetime
from uuid import UUID, uuid4
from pydantic import BaseModel, Field

class DecisionStatus(str, Enum):
    PROPOSED = "proposed"
    PENDING_APPROVAL = "pending_approval"
    APPROVED = "approved"
    REJECTED = "rejected"
    EXECUTED = "executed"
    FAILED = "failed"

class RiskLevel(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

class Business(BaseModel):
    id: UUID = Field(default_factory=uuid4)
    name: str
    owner: str
    currency: str = "EUR"
    timezone: str = "Europe/Athens"
    created_at: datetime = Field(default_factory=datetime.utcnow)

class Decision(BaseModel):
    id: UUID = Field(default_factory=uuid4)
    business_id: UUID
    title: str
    problem: str
    recommendation: str
    evidence: list[str] = []
    expected_impact: float = 0
    confidence: float = Field(ge=0, le=1)
    risk: RiskLevel = RiskLevel.MEDIUM
    reversible: bool = True
    status: DecisionStatus = DecisionStatus.PROPOSED
