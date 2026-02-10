<div align="center">

# 🛡️ SHADOW GATEWAY: GHOST PROTOCOL
### **A Software-Defined Air-Gap for Autonomous API Security**

[![Status](https://img.shields.io/badge/Status-Operational-emerald?style=for-the-badge&logo=opsgenie)](https://github.com/)
[![JIT](https://img.shields.io/badge/Access-JIT--Temporal-blue?style=for-the-badge&logo=python)](https://github.com/)
[![Zero Trust](https://img.shields.io/badge/Model-Zero--Trust-black?style=for-the-badge&logo=google-cloud)](https://github.com/)

---

### 🌌 Overview
**Shadow Gateway** is a security infrastructure that enforces a **Ghost State** on backend services. By default, the server remains invisible to the public internet—returning a `404 Not Found` to all unauthorized traffic—until it is "Summoned" via a secure control plane.

</div>

---

## 👥 Developers
**Aryan** • **Adya Priyam** • **Raj Lakshmi**

---

## 🛡️ Security Philosophies
* **Mimetic Obscurity:** Unlike traditional firewalls that return a `403 Forbidden` (confirming the resource exists), Shadow Gateway returns a `404 Not Found`. The server mimics a non-existent endpoint to prevent footprinting and reconnaissance.
* **Temporal Access (JIT):** Identity is verified, but access is finite. The 30-minute JIT (Just-In-Time) window automatically collapses, minimizing the window of vulnerability.
* **Zero-Trust Enforcement:** Every request is validated in real-time against the authorized IP stored in the Firebase Control Plane.
* **Cross-Origin Lockdown:** Strict CORS policies ensure the gateway is only controllable via authorized frontend origins.

---

## 🏗️ System Infrastructure & Setup



[Image of zero trust network architecture]


### 1️⃣ Backend Setup (FastAPI & Firebase)
The backend uses **Stealth Middleware** to intercept every request. If the requester's IP is not in the "Active" state in Firebase, the server ghosts the request.

```python
# Install: pip install fastapi uvicorn firebase-admin
import time
from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse
from firebase_admin import credentials, db, initialize_app

app = FastAPI()

# 1. Initialize Firebase Control Plane
cred = credentials.Certificate("serviceAccountKey.json")
initialize_app(cred, {'databaseURL': 'YOUR_FIREBASE_RTDB_URL'})

# 2. Stealth Middleware (The Ghost Logic)
@app.middleware("http")
async def ghost_protocol_middleware(request: Request, call_next):
    if request.url.path in ["/summon", "/docs"]:
        return await call_next(request)

    ip_key = request.client.host.replace(".", "_")
    auth_data = db.reference(f'authorized_ips/{ip_key}').get()

    if not auth_data or time.time() > auth_data.get('expires_at', 0):
        return JSONResponse(status_code=404, content={"detail": "Not Found"})

    return await call_next(request)

# 3. JIT Bridge (The Summoning Endpoint)
@app.post("/summon")
async def summon(request: Request):
    ip_key = request.client.host.replace(".", "_")
    expiry = time.time() + 1800 # 30 Minute Window
    db.reference(f'authorized_ips/{ip_key}').set({"expires_at": expiry, "status": "active"})
    return {"status": "Gateway Manifested", "window": "30m"}
