from fastapi import FastAPI
from pydantic import BaseModel
from app.domain import Business, Decision, DecisionStatus, RiskLevel

app = FastAPI(title="Athena OS API", version="0.1.0")

class Health(BaseModel):
    status: str
    service: str
    version: str

@app.get("/health", response_model=Health)
def health():
    return Health(status="ok", service="athena-api", version="0.1.0")

@app.get("/api/v1/business/demo", response_model=Business)
def demo_business():
    return Business(name="Amir Amazon Business", owner="Amir")

@app.get("/api/v1/decisions/demo", response_model=list[Decision])
def demo_decisions():
    business = demo_business()
    return [Decision(
        business_id=business.id,
        title="Review PPC efficiency",
        problem="Advertising efficiency requires review.",
        recommendation="Analyze wasted spend and high-converting search terms.",
        evidence=["Demo data only"],
        expected_impact=500,
        confidence=0.82,
        risk=RiskLevel.LOW,
        status=DecisionStatus.PROPOSED,
    )]
