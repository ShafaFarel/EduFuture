import os

from dotenv import load_dotenv
# pyrefly: ignore [missing-import]
from supabase import Client, create_client

load_dotenv()

SUPABASE_URL: str = os.getenv("SUPABASE_URL", "")
SUPABASE_SERVICE_KEY: str = os.getenv("SUPABASE_SERVICE_KEY", "")

if not SUPABASE_URL or not SUPABASE_SERVICE_KEY:
    raise EnvironmentError("Gagal menemukan Environment Variables.")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)
