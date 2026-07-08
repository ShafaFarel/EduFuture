from fastapi import APIRouter, HTTPException, status

from database import supabase
from schemas import AuthInput, AuthOutput

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post("/register", response_model=AuthOutput, status_code=status.HTTP_201_CREATED)
def register(payload: AuthInput) -> AuthOutput:
    try:
        result = supabase.auth.sign_up({
            "email": payload.email,
            "password": payload.password,
        })
        if result.user is None:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Registrasi gagal.",
            )
        if result.user.identities is not None and len(result.user.identities) == 0:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Email sudah terdaftar.",
            )
        return AuthOutput(
            access_token=result.session.access_token if result.session else "",
            email=result.user.email,
            message="Registrasi berhasil. Silakan cek email untuk konfirmasi akun.",
        )
    except HTTPException:
        raise
    except Exception as exc:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(exc)) from exc


@router.post("/login", response_model=AuthOutput)
def login(payload: AuthInput) -> AuthOutput:
    try:
        result = supabase.auth.sign_in_with_password({
            "email": payload.email,
            "password": payload.password,
        })
        return AuthOutput(
            access_token=result.session.access_token,
            email=result.user.email,
            message="Login berhasil.",
        )
    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Email atau kata sandi salah.",
        ) from exc


@router.post("/logout", status_code=status.HTTP_200_OK)
def logout() -> dict:
    try:
        supabase.auth.sign_out()
        return {"message": "Logout berhasil."}
    except Exception as exc:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(exc)) from exc
