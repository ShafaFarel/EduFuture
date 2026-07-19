import sys
from pathlib import Path

# Daftarkan folder Backend agar module seperti routers, database, dependencies terbaca oleh Vercel
backend_dir = Path(__file__).resolve().parent.parent
sys.path.append(str(backend_dir))

from main import app
