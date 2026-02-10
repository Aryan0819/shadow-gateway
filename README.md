<div align="center">

# 🛡️ SHADOW GATEWAY: GHOST PROTOCOL
### **A Software-Defined Air-Gap for Autonomous API Security**

[![Status](https://img.shields.io/badge/Status-Operational-emerald?style=for-the-badge&logo=opsgenie)](https://github.com/)
[![JIT](https://img.shields.io/badge/Access-JIT--Temporal-blue?style=for-the-badge&logo=python)](https://github.com/)
[![Zero Trust](https://img.shields.io/badge/Model-Zero--Trust-black?style=for-the-badge&logo=google-cloud)](https://github.com/)



</div>

---

## 🌌 The Problem & The Solution
Most backend servers are "always-on," leaving them exposed to constant scanning and brute-force attempts. **Shadow Gateway** solves this by enforcing a **Ghost State**. The server returns a `404 Not Found` to the entire internet until it is "Summoned" by an authorized developer.

### 🛠️ Core Infrastructure
* **Stealth Middleware:** Custom Python logic that mimics a non-existent endpoint for unauthorized IPs.
* **JIT (Just-In-Time) Bridge:** A 30-minute temporal access window that automatically collapses via background threads.
* **Control Plane:** Real-time state synchronization via Firebase RTDB and Firebase Authentication.

---

## 👥 The Engineering Team

| <img src="https://github.com/identicons/aryan.png" width="100px;"/><br />**Aryan** | <img src="https://github.com/identicons/adya.png" width="100px;"/><br />**Adya Priyam** | <img src="https://github.com/identicons/raj.png" width="100px;"/><br />**Raj Lakshmi** |
| :---: | :---: | :---: |
| Lead Architect & GSA | Security Systems | Frontend Engineering |

---

## 🏗️ System Architecture

| Tier | Technology | Contribution |
| :--- | :--- | :--- |
| **Control Plane** | React.js & Tailwind | Interactive Dashboard & Countdown |
| **Enforcement** | FastAPI (Python) | IP-Whitelisting & Ghosting |
| **Database** | Firebase RTDB | Cross-service state persistence |
| **Authentication** | Firebase Auth | Secure Admin Identity Verification |



---

## ⚡ Deployment & Execution

### 1. Initialize Backend
```bash
cd backend
pip install fastapi uvicorn firebase-admin
# Place 'serviceAccountKey.json' in this folder
python main.py
