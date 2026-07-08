import numpy as np
import pandas as pd
from fastapi import APIRouter, Depends, HTTPException, Request

from database import supabase
from dependencies import get_current_user
from schemas import (
    SCENARIO_LABELS,
    DigitalTwinOutput,
    ScenarioResponse,
    StudentProfileInput,
)

router = APIRouter()


def _format_salary(raw: float) -> str:
    # Cegah nilai negatif dari prediksi ML
    if raw < 0:
        raw = abs(raw)
    
    # Deteksi skala (apakah satuan juta atau nilai penuh rupiah)
    if raw < 1000:
        value = int(raw * 1_000_000)
    else:
        value = int(raw)
    
    # Batas bawah realistis (UMR default jika prediksi anomali sangat rendah)
    if value < 2_000_000:
        value = 4_500_000
        
    return f"Rp {value:,}".replace(",", ".")



@router.post("/predict", response_model=DigitalTwinOutput)
def predict(
    request: Request,
    student: StudentProfileInput,
    current_user: dict = Depends(get_current_user),
) -> DigitalTwinOutput:
    try:
        ml = request.app.state.ml_assets

        le_style = ml["le_style"]
        le_major = ml["le_major"]
        model = ml["model"]
        salary_predictor = ml["salary_predictor"]
        career_map = ml["career_map"]

        style_encoded: int = le_style.transform([student.learning_style])[0]

        # Hitung fitur statistik tambahan (Feature Engineering)
        scores = [
            student.math_score,
            student.science_score,
            student.language_score,
            student.logical_score,
        ]
        avg_score = sum(scores) / 4.0
        total_score = sum(scores)
        highest_score = max(scores)
        lowest_score = min(scores)

        # Buat DataFrame sesuai fitur yang diharapkan model XGBoost
        input_data = pd.DataFrame([{
            "Math_Score": student.math_score,
            "Science_Score": student.science_score,
            "Language_Score": student.language_score,
            "Logical_Score": student.logical_score,
            "Learning_Style_Encoded": style_encoded,
            "Average_Score": avg_score,
            "Total_Score": total_score,
            "Highest_Score": highest_score,
            "Lowest_Score": lowest_score,
        }])

        probabilities: np.ndarray = model.predict_proba(input_data)[0]
        top_3_indices: np.ndarray = np.argsort(probabilities)[::-1][:3]

        scenarios: list[ScenarioResponse] = []
        for rank, class_idx in enumerate(top_3_indices):
            major_name: str = le_major.inverse_transform([class_idx])[0]
            match_pct: float = round(float(probabilities[class_idx]) * 100, 1)
            career_prospect: str = career_map.get(major_name, "N/A")

            salary_data = pd.DataFrame([{
                "Math_Score": student.math_score,
                "Science_Score": student.science_score,
                "Language_Score": student.language_score,
                "Logical_Score": student.logical_score,
                "Learning_Style_Encoded": style_encoded,
                "Average_Score": avg_score,
                "Total_Score": total_score,
                "Highest_Score": highest_score,
                "Lowest_Score": lowest_score,
                "Target_Major_Encoded": class_idx,
            }])
            estimated_salary: str = _format_salary(
                salary_predictor.predict(salary_data)[0]
            )

            scenarios.append(ScenarioResponse(
                scenario_type=SCENARIO_LABELS[rank],
                major_name=major_name,
                match_percentage=match_pct,
                career_prospect=career_prospect,
                estimated_salary=estimated_salary,
            ))

        response = DigitalTwinOutput(status="success", scenarios=scenarios)

        payload: dict = {
            "user_id": current_user["id"],
            "math_score": student.math_score,
            "science_score": student.science_score,
            "language_score": student.language_score,
            "logical_score": student.logical_score,
            "learning_style": student.learning_style,
            "predicted_majors": [s.model_dump() for s in response.scenarios],
        }
        supabase.table("digital_twin_profiles").insert(payload).execute()

        return response

    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc


@router.get("/predict/history")
def get_predict_history(current_user: dict = Depends(get_current_user)) -> dict:
    try:
        result = supabase.table("digital_twin_profiles") \
            .select("id, created_at, math_score, science_score, language_score, logical_score, learning_style, predicted_majors") \
            .eq("user_id", current_user["id"]) \
            .order("created_at", desc=True) \
            .execute()
        return {"status": "success", "history": result.data}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc


@router.delete("/predict/history")
def clear_predict_history(current_user: dict = Depends(get_current_user)) -> dict:
    try:
        supabase.table("digital_twin_profiles") \
            .delete() \
            .eq("user_id", current_user["id"]) \
            .execute()
        return {"status": "success", "message": "Riwayat berhasil dihapus"}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc)) from exc

