import os, threading, time
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import firebase_admin
from firebase_admin import credentials, db

# 1. PATH FIX: This ensures Python finds the key in its own folder
base_dir = os.path.dirname(os.path.abspath(__file__))
key_path = os.path.join(base_dir, "serviceAccountKey.json")

# Safety Check
if not os.path.exists(key_path):
    print(f"❌ ERROR: Key file not found at {key_path}")
    print("FIX: Move your Firebase JSON key to the 'backend' folder and rename it.")
    exit()

# 2. FIREBASE INIT
cred = credentials.Certificate(key_path)
firebase_admin.initialize_app(cred, {'databaseURL': 'https://shadow-gateway-default-rtdb.firebaseio.com'})

app = FastAPI()

# 3. CORS FIX: This is CRITICAL for the 'Failed to Fetch' error
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

# 4. JIT AUTO-LOCK
def start_jit_timer(duration=1800):
    def collapse():
        time.sleep(duration)
        db.reference('/').update({"gate_status": "LOCKED", "authorized_ip": ""})
        print("--- JIT WINDOW CLOSED ---")
    threading.Thread(target=collapse, daemon=True).start()

# 5. GHOST MIDDLEWARE
@app.middleware("http")
async def gatekeeper(request: Request, call_next):
    gate_data = db.reference('/').get()
    if gate_data.get("gate_status") == "LOCKED" or (request.client.host != gate_data.get("authorized_ip")):
        if request.url.path == "/api/summon": # Allow summon route to pass
            return await call_next(request)
        return JSONResponse(status_code=404, content={"detail": "Not Found"})
    return await call_next(request)

@app.post("/api/summon")
async def summon(request: Request):
    db.reference('/').update({"gate_status": "OPEN", "authorized_ip": request.client.host})
    start_jit_timer(1800)
    return {"status": "OPEN"}

@app.get("/api/vault")
async def vault():
    return {"content": "Secret Project Data: The Ghost Protocol is Active."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)