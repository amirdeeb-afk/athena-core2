from sqlalchemy import String, DateTime, Float, Boolean, Text, create_engine
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from datetime import datetime
import os

class Base(DeclarativeBase): pass

class BusinessModel(Base):
    __tablename__ = "businesses"
    id: Mapped[str] = mapped_column(String(36), primary_key=True)
    name: Mapped[str] = mapped_column(String(200))
    owner: Mapped[str] = mapped_column(String(200))
    currency: Mapped[str] = mapped_column(String(3), default="EUR")
    timezone: Mapped[str] = mapped_column(String(80), default="Europe/Athens")
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class DecisionModel(Base):
    __tablename__ = "decisions"
    id: Mapped[str] = mapped_column(String(36), primary_key=True)
    business_id: Mapped[str] = mapped_column(String(36), index=True)
    title: Mapped[str] = mapped_column(String(300))
    recommendation: Mapped[str] = mapped_column(Text)
    confidence: Mapped[float] = mapped_column(Float)
    risk: Mapped[str] = mapped_column(String(20))
    reversible: Mapped[bool] = mapped_column(Boolean, default=True)
    status: Mapped[str] = mapped_column(String(30), default="proposed")

engine = create_engine(os.getenv("DATABASE_URL", "sqlite:///./athena.db"), pool_pre_ping=True)
