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
* **Aryan** ([@aryan200420](https://github.com/aryan200420))
* **Adya Priyam** ([@Adya-Priyam](https://github.com/Adya-Priyam))
* **Raj Lakshmi** ([@RajLakshmi-23](https://github.com/RajLakshmi-23))

---

## 🛡️ Security Philosophies



[Image of zero trust network architecture]


* **Mimetic Obscurity:** Unlike traditional firewalls that return a `403 Forbidden` (confirming a resource exists but is blocked), Shadow Gateway returns a `404 Not Found`. The server mimics a non-existent endpoint to prevent footprinting and reconnaissance.
* **Temporal Access (JIT):** Access is a lease, not a right. The 30-minute **Just-In-Time (JIT)** window automatically collapses, minimizing the window of vulnerability.
* **Zero-Trust Enforcement:** No IP is trusted by default. Every request is validated in real-time against the synchronized state in the global control plane.
* **Stealth Middleware:** A custom logic layer that sits at the very edge of the application, dropping unauthorized packets before they touch any business logic.

---

## 🛠️ Tech Stack

### **Backend & Enforcement**
* **Python (FastAPI):** High-performance asynchronous framework for the core enforcement engine.
* **Uvicorn:** ASGI server implementation for lightning-fast request handling.
* **Firebase Admin SDK:** Server-side communication with the global control plane.

### **Control Plane & Frontend**
* **React.js:** Interactive "Summoning" dashboard and real-time state management.
* **Tailwind CSS:** High-fidelity, "Security Terminal" themed UI.
* **Lucide React:** Iconography for system status and security indicators.

### **Infrastructure & Database**
* **Firebase RTDB:** Real-time state orchestrator for instant IP syncing.
* **Firebase Auth:** Secure developer identity verification.

---

## 🏗️ System Infrastructure
1.  **The Stealth Layer:** Custom middleware checking incoming headers/IPs against the Firebase RTDB.
2.  **The JIT Bridge:** Backend background threads monitoring TTL (Time-to-Live) to purge expired access.
3.  **The Control Plane:** A secure React app where developers manifest the gateway for their specific IP.

---

## ⚡ Setup Requirements
* **Firebase Service Account:** Requires a `serviceAccountKey.json` for backend access.
* **Environment Config:** Frontend Firebase API keys and authorized Backend URL.
* **CORS Lockdown:** Strict restriction to only accept requests from the authorized Control Plane domain.

---
<div align="center">
  <sub>Built with precision for the next generation of API security.</sub>
</div>
