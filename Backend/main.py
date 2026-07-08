import json
from contextlib import asynccontextmanager
from pathlib import Path

import joblib
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import auth, mentor, predict

MODELS_DIR = Path(__file__).resolve().parent / "models"


@asynccontextmanager
async def lifespan(app: FastAPI):
    
    app.state.ml_assets = {
        "le_style": joblib.load(MODELS_DIR / "learning_encoder.pkl"),
        "le_major": joblib.load(MODELS_DIR / "major_encoder.pkl"),
        "model": joblib.load(MODELS_DIR / "major_model.pkl"),
        "salary_predictor": joblib.load(MODELS_DIR / "salary_model.pkl"),
    }
    with open(MODELS_DIR / "career_mapping.json", "r", encoding="utf-8") as f:
        app.state.ml_assets["career_map"] = json.load(f)
    yield
    app.state.ml_assets.clear()


app = FastAPI(
    title="EduFuture AI Backend",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(mentor.router)
app.include_router(predict.router)


@app.get("/")
def root() -> dict:
    return {"message": "Server EduFuture berjalan!"}
