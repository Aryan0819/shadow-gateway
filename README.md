<div align="center">

# 🌌 SHADOW GATEWAY: GHOST PROTOCOL
### **Autonomous API Stealth • Software-Defined Air-Gap • Temporal Security**

<br />

[![Infrastructure](https://img.shields.io/badge/INFRASTRUCTURE-VIEW-00FF41?style=for-the-badge&logo=google-cloud&logoColor=white)](#-system-infrastructure)
[![Philosophy](https://img.shields.io/badge/PHILOSOPHY-READ-0078D4?style=for-the-badge&logo=gitbook&logoColor=white)](#-security-philosophies)
[![Stack](https://img.shields.io/badge/STACK-ENFORCEMENT-white?style=for-the-badge&logo=python&logoColor=3776AB)](#-tech-stack)
[![Deploy](https://img.shields.io/badge/DEPLOY-EXECUTE-red?style=for-the-badge&logo=fastapi&logoColor=white)](#-setup--deployment)

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

<div align="center">

| Component | Tech | Logo | Purpose |
| :--- | :--- | :--- | :--- |
| **Backend** | **FastAPI** | ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=flat&logo=fastapi&logoColor=white) | Asynchronous Enforcement Engine |
| **Frontend** | **React** | ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | Control Plane Dashboard |
| **Auth/DB** | **Firebase** | ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=flat&logo=Firebase&logoColor=white) | Real-time State Orchestration |
| **Styling** | **Tailwind** | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | Security Terminal UI Design |
| **Scripting** | **Python** | ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) | Logic & Background Cleanup |
| **Environment** | Node.js | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) |Runtime environment for the React-based Control Plane |
</div>

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
'''

---
shadow-gateway/
├── backend/
│   ├── main.py                # FastAPI Enforcement & JIT Logic
│   ├── requirements.txt       # Backend dependencies
│   └── serviceAccountKey.json # Firebase Admin SDK Credentials
├── frontend/
│   ├── src/
│   │   ├── App.js             # Control Plane Dashboard Logic
│   │   ├── firebaseConfig.js  # Firebase Client Configuration
│   │   └── index.css          # Tailwind & Global Styles
│   ├── public/                # Static assets
│   └── package.json           # Frontend dependencies
└── README.md                  # System Manifest
'''
