<div align="center">

# 🌌 SHADOW GATEWAY: GHOST PROTOCOL
### **Autonomous API Stealth • Software-Defined Air-Gap • Temporal Security**

![Network Stealth](https://img.shields.io/badge/NETWORK-STEALTH_ACTIVE-00FF41?style=for-the-badge&logo=opsgenie&logoColor=00FF41)
![JIT Access](https://img.shields.io/badge/ACCESS-JIT_TEMPORAL-0078D4?style=for-the-badge&logo=clockify&logoColor=white)
![Zero Trust](https://img.shields.io/badge/MODEL-ZERO_TRUST-white?style=for-the-badge&logo=postman&logoColor=black)

---

**[ INFRASTRUCTURE ]** &nbsp; • &nbsp; **[ PHILOSOPHY ]** &nbsp; • &nbsp; **[ STACK ]** &nbsp; • &nbsp; **[ DEPLOY ]**

---

### ⌈ SYSTEM MANIFEST ⌋
**Shadow Gateway** is a high-assurance security infrastructure that enforces a **Ghost State** on backend services. By utilizing mimetic middleware, the infrastructure remains invisible to the public internet—returning a `404 Not Found` to all unauthorized traffic—until it is "Summoned" via a secure Control Plane.

</div>

---

## 👥 THE ENGINEERING TEAM
<div align="center">

| | Developer | GitHub Identity |
| :--- | :--- | :--- |
| 🛡️ | **Aryan** | [@aryan200420](https://github.com/aryan200420) |
| ⚡ | **Adya Priyam** | [@Adya-Priyam](https://github.com/Adya-Priyam) |
| 🕵️ | **Raj Lakshmi** | [@RajLakshmi-23](https://github.com/RajLakshmi-23) |

</div>

---

## 🏗️ SYSTEM INFRASTRUCTURE
The system operates on a dual-plane architecture designed to decouple **Identity Verification** from **Resource Access**.



[Image of zero trust network architecture]


### 🛰️ The Control Plane (Frontend)
The "Summoning" portal is a high-fidelity command center built with **React.js** and **Tailwind CSS**.
* **Identity Provisioning:** Validates developer credentials via Firebase Auth.
* **Temporal Dashboards:** Real-time countdowns for active JIT access windows.
* **Manifestation Trigger:** On-demand IP whitelisting with instantaneous global propagation.

### 🌑 The Enforcement Layer (Backend)
Powered by **FastAPI**, the backend acts as the silent gatekeeper.
* **Stealth Middleware:** Intercepts traffic at the edge. Unauthorized packets receive a `404` to prevent server footprinting.
* **Just-In-Time (JIT) Bridge:** A 30-minute temporal window that automatically collapses via background cleanup threads.
* **State Synchronization:** Real-time integration with **Firebase RTDB** for sub-second security updates.

---

## 🛡️ SECURITY PHILOSOPHIES

> [!IMPORTANT]
> **MIMETIC OBSCURITY:** Traditional firewalls return a `403 Forbidden`, leaking that a resource exists but is protected. Shadow Gateway returns a **standard 404**, making the server appear non-existent to automated reconnaissance tools.

> [!CAUTION]
> **TEMPORAL DECAY:** Access is a lease, not a permanent state. The JIT window ensures that even if a developer's machine is compromised, the window of vulnerability is limited to the 30-minute bridge duration.

---

## 🛠️ TECH STACK

| COMPONENT | TECHNOLOGY | ROLE |
| :--- | :--- | :--- |
| **Enforcement** | `Python / FastAPI` | Asynchronous high-speed request filtering. |
| **Control Plane** | `React / Tailwind` | Interactive secure dashboard & state tracking. |
| **Orchestration** | `Firebase Admin` | Real-time state persistence & Auth. |
| **Persistence** | `Firebase RTDB` | Global IP-whitelisting synchronization. |

---

## ⚡ SETUP & DEPLOYMENT

### 1️⃣ Environment Configuration
Ensure `serviceAccountKey.json` is present in the root directory and your Firebase Realtime Database rules are set to `auth != null`.

### 2️⃣ Service Initialization
```bash
# Initialize Backend Enforcement
cd backend && pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload

# Launch Control Plane
cd frontend && npm install
npm start
