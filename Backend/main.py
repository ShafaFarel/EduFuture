import json
import os
import pickle
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from routers import auth, mentor, predict

MODELS_DIR = Path(__file__).resolve().parent / "models"
FRONTEND_DIST = Path(__file__).resolve().parent.parent / "FE" / "dist"

# Load encoders (.pkl)
with open(MODELS_DIR / "learning_encoder.pkl", "rb") as f:
    learning_encoder = pickle.load(f)

with open(MODELS_DIR / "major_encoder.pkl", "rb") as f:
    major_encoder = pickle.load(f)

with open(MODELS_DIR / "career_mapping.json", encoding="utf-8") as f:
    career_map: dict = json.load(f)

# Load XGBoost models (.pkl)
with open(MODELS_DIR / "major_model.pkl", "rb") as f:
    major_model = pickle.load(f)

with open(MODELS_DIR / "salary_model.pkl", "rb") as f:
    salary_model = pickle.load(f)

ml_assets = {
    "learning_encoder": learning_encoder,
    "major_encoder": major_encoder,
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
