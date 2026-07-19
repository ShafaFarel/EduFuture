import json
import os
from contextlib import asynccontextmanager
from pathlib import Path

import joblib
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from routers import auth, mentor, predict

MODELS_DIR = Path(__file__).resolve().parent / "models"
FRONTEND_DIST = Path(__file__).resolve().parent.parent / "FE" / "dist"


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

# Serve React static assets jika folder dist tersedia (production)
if FRONTEND_DIST.exists():
    app.mount("/assets", StaticFiles(directory=FRONTEND_DIST / "assets"), name="assets")

    @app.get("/{catchall:path}", include_in_schema=False)
    def serve_frontend(catchall: str):
        # Biarkan route API tetap dihandle oleh router masing-masing
        api_prefixes = ("auth", "predict", "mentor", "docs", "redoc", "openapi.json")
        if any(catchall.startswith(p) for p in api_prefixes):
            from fastapi import HTTPException
            raise HTTPException(status_code=404)
        index = FRONTEND_DIST / "index.html"
        return FileResponse(str(index))
else:
    # Mode development: kembalikan pesan status
    @app.get("/")
    def root() -> dict:
        return {"message": "Server EduFuture berjalan! (Frontend belum di-build)"}
