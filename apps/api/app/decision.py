from dataclasses import dataclass
from app.domain import Decision, RiskLevel

@dataclass(frozen=True)
class PolicyResult:
    allowed: bool
    requires_approval: bool
    reason: str

class DecisionEngine:
    def score(self, decision: Decision) -> float:
        risk_penalty = {RiskLevel.LOW: .05, RiskLevel.MEDIUM: .15, RiskLevel.HIGH: .30, RiskLevel.CRITICAL: .50}[decision.risk]
        return max(0.0, decision.confidence - risk_penalty)

class PolicyEngine:
    def evaluate(self, decision: Decision) -> PolicyResult:
        if decision.risk in {RiskLevel.HIGH, RiskLevel.CRITICAL}:
            return PolicyResult(False, True, "High-impact action requires explicit approval.")
        if not decision.reversible:
            return PolicyResult(False, True, "Irreversible action requires explicit approval.")
        return PolicyResult(True, True, "Alpha policy: all consequential actions require approval.")
