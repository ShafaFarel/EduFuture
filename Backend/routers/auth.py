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
                detail="Registrasi gagal. Silakan coba lagi.",
            )

        if result.user.identities is not None and len(result.user.identities) == 0:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Email ini sudah terdaftar. Silakan langsung masuk.",
            )

        token = result.session.access_token if result.session else ""

        return AuthOutput(
            access_token=token,
            email=result.user.email or payload.email,
            message="Registrasi berhasil! Anda dapat langsung masuk.",
        )
    except HTTPException:
        raise
    except Exception as exc:
        err_msg = str(exc)
        if "already registered" in err_msg.lower() or "already in use" in err_msg.lower():
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Email ini sudah terdaftar. Silakan langsung masuk.",
            ) from exc
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Registrasi gagal. Coba email lain atau langsung masuk.",
        ) from exc


@router.post("/login", response_model=AuthOutput)
def login(payload: AuthInput) -> AuthOutput:
    try:
        result = supabase.auth.sign_in_with_password({
            "email": payload.email,
            "password": payload.password,
        })

        token = result.session.access_token if (result and result.session) else ""

        if not token:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Email atau kata sandi salah.",
            )

        return AuthOutput(
            access_token=token,
            email=result.user.email if (result and result.user) else payload.email,
            message="Login berhasil.",
        )
    except HTTPException:
        raise
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
    except Exception:
        return {"message": "Logout berhasil."}

