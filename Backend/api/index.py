import sys
from pathlib import Path


backend_dir = Path(__file__).resolve().parent.parent
sys.path.append(str(backend_dir))

from main import app
