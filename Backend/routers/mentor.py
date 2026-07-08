import os

from dotenv import load_dotenv
from fastapi import APIRouter, Depends, HTTPException, status
from groq import Groq

from database import supabase
from dependencies import get_current_user
from schemas import ChatInput, ChatOutput

load_dotenv()

router = APIRouter(prefix="/mentor", tags=["AI Mentor"])

_groq = Groq(api_key=os.getenv("GROQ_API_KEY", ""))
_MODEL = "llama-3.1-8b-instant"


def _build_system_prompt(predictions: list[dict]) -> str:
    context_lines = "\n".join([
        f"- {p['scenario_type']}: {p['major_name']} "
        f"(kecocokan {p['match_percentage']}%, "
        f"estimasi gaji {p['estimated_salary']})"
        for p in predictions
    ])
    return (
        "Kamu adalah AI Mentor EduFuture, seorang konselor karier yang ramah dan berpengetahuan luas. "
        "Bantu siswa memahami hasil prediksi jurusan dan kariernya secara personal dan mendalam. "
        "Selalu jawab dalam Bahasa Indonesia.\n\n"
        f"Profil prediksi siswa:\n{context_lines}"
    )


@router.post("/chat", response_model=ChatOutput)
def chat(payload: ChatInput, current_user: dict = Depends(get_current_user)) -> ChatOutput:
    result = supabase.table("digital_twin_profiles") \
        .select("predicted_majors") \
        .eq("user_id", current_user["id"]) \
        .order("created_at", desc=True) \
        .limit(1) \
        .execute()

    if not result.data:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Data prediksi tidak ditemukan. Lakukan prediksi terlebih dahulu.",
        )

    predictions: list[dict] = result.data[0]["predicted_majors"]
    system_prompt = _build_system_prompt(predictions)

    try:
        response = _groq.chat.completions.create(
            model=_MODEL,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": payload.message},
            ],
            max_tokens=1024,
            temperature=0.7,
        )
        return ChatOutput(reply=response.choices[0].message.content)
    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Layanan AI Mentor tidak tersedia saat ini.",
        ) from exc
