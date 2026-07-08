from typing import List, Literal, Optional

from pydantic import BaseModel, EmailStr, Field

VALID_LEARNING_STYLES = Literal["Visual", "Auditory", "Read/Write", "Kinesthetic"]

SCENARIO_LABELS = ["Rekomendasi Utama", "Pilihan Alternatif", "Pilihan Aman"]


class StudentProfileInput(BaseModel):
    math_score: int = Field(..., ge=0, le=100)
    science_score: int = Field(..., ge=0, le=100)
    language_score: int = Field(..., ge=0, le=100)
    logical_score: int = Field(..., ge=0, le=100)
    learning_style: VALID_LEARNING_STYLES


class ScenarioResponse(BaseModel):
    scenario_type: str
    major_name: str
    match_percentage: float
    career_prospect: Optional[str] = None
    estimated_salary: Optional[str] = None


class DigitalTwinOutput(BaseModel):
    status: str
    scenarios: List[ScenarioResponse]


class AuthInput(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=6)


class AuthOutput(BaseModel):
    access_token: str
    email: str
    message: str


class ChatInput(BaseModel):
    message: str = Field(..., min_length=1, max_length=500)


class ChatOutput(BaseModel):
    reply: str
