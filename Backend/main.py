import json
import os
from pathlib import Path

import xgboost as xgb
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from routers import auth, mentor, predict

MODELS_DIR = Path(__file__).resolve().parent / "models"
FRONTEND_DIST = Path(__file__).resolve().parent.parent / "FE" / "dist"

# Load encoder JSON (menggantikan LabelEncoder scikit-learn)
with open(MODELS_DIR / "learning_encoder.json", encoding="utf-8") as f:
    learning_classes: list[str] = json.load(f)

with open(MODELS_DIR / "major_encoder.json", encoding="utf-8") as f:
    major_classes: list[str] = json.load(f)

with open(MODELS_DIR / "career_mapping.json", encoding="utf-8") as f:
    career_map: dict = json.load(f)

# Load model XGBoost format native — tidak butuh scikit-learn
major_model = xgb.Booster()
major_model.load_model(str(MODELS_DIR / "major_model.ubj"))

salary_model = xgb.Booster()
salary_model.load_model(str(MODELS_DIR / "salary_model.ubj"))

# Lookup dict pengganti LabelEncoder
style_to_int: dict[str, int] = {s: i for i, s in enumerate(learning_classes)}
int_to_major: dict[int, str] = {i: m for i, m in enumerate(major_classes)}

ml_assets = {
    "style_to_int": style_to_int,
    "int_to_major": int_to_major,
    "major_model": major_model,
    "salary_model": salary_model,
    "career_map": career_map,
}

app = FastAPI(title="EduFuture AI Backend", version="1.0.0")

app.state.ml_assets = ml_assets

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(mentor.router)
app.include_router(predict.router)

# Serve React static assets jika folder dist tersedia (production)
if FRONTEND_DIST.exists():
    app.mount("/assets", StaticFiles(directory=FRONTEND_DIST / "assets"), name="assets")

    @app.get("/{catchall:path}", include_in_schema=False)
    def serve_frontend(catchall: str):
        api_prefixes = ("auth", "predict", "mentor", "docs", "redoc", "openapi.json")
        if any(catchall.startswith(p) for p in api_prefixes):
            from fastapi import HTTPException
            raise HTTPException(status_code=404)
        return FileResponse(str(FRONTEND_DIST / "index.html"))
else:
    @app.get("/")
    def root() -> dict:
        return {"message": "Server EduFuture berjalan!"}
