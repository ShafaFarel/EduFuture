set -e

echo "=== Installing Node.js dependencies ==="
cd FE
npm install
npm run build
cd ..

echo "=== Installing Python dependencies ==="
cd Backend
pip install -r requirements.txt

echo "=== Starting FastAPI server ==="
uvicorn main:app --host 0.0.0.0 --port $PORT
