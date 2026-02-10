<div align="center">

# 🛡️ SHADOW GATEWAY: GHOST PROTOCOL
### **Autonomous API Stealth & Temporal Access Infrastructure**

![Status](https://img.shields.io/badge/STATUS-OPERATIONAL-00FF41?style=for-the-badge&logo=statuspage&logoColor=00FF41)
![Security](https://img.shields.io/badge/SECURITY-ZERO--TRUST-black?style=for-the-badge&logo=google-cloud&logoColor=white)
![Framework](https://img.shields.io/badge/FRAMEWORK-FASTAPI-05998b?style=for-the-badge&logo=fastapi&logoColor=white)



[Image of zero trust network architecture]


---

### 🌌 Project Essence
**Shadow Gateway** is not just a firewall; it is a **Software-Defined Air-Gap**. 
It enforces a **Ghost State** on backend services, ensuring that unauthorized traffic receives a `404 Not Found`—mimicking a non-existent server—effectively eliminating the attack surface for reconnaissance.

[Explore the Protocol](#-security-philosophies) • [View Tech Stack](#-tech-stack) • [Setup](#-setup-requirements)

---

</div>

## 👥 Engineering Team
| Developer | GitHub Profile |
| :--- | :--- |
| **Aryan** | [@aryan200420](https://github.com/aryan200420) |
| **Adya Priyam** | [@Adya-Priyam](https://github.com/Adya-Priyam) |
| **Raj Lakshmi** | [@RajLakshmi-23](https://github.com/RajLakshmi-23) |

---

## 🛡️ Security Philosophies

### 🌑 Mimetic Obscurity
Traditional security returns `403 Forbidden`, which confirms a target's existence. Shadow Gateway returns a **standard 404**, making the infrastructure invisible to automated scanners and brute-force scripts.

### ⏳ Temporal Access (JIT)
Access is a lease, not a right. The **Just-In-Time (JIT)** bridge manifests for exactly 30 minutes. Once the TTL expires, the background cleanup threads collapse the bridge, returning the system to its ghost state.

### 🧊 Zero-Trust Enforcement
Every packet is treated as hostile. Real-time synchronization between the **Control Plane** (React) and the **Enforcement Layer** (FastAPI) ensures that even authenticated users are strictly limited to their active session window.

---

## 🏗️ System Infrastructure

| Component | Logic |
| :--- | :--- |
| **Stealth Layer** | Custom Python Middleware acting as the primary gatekeeper. |
| **The Bridge** | Asynchronous background threads managing JIT state persistence. |
| **Control Plane** | Firebase-backed React dashboard for "Summoning" the gateway. |

---

## 🛠️ Tech Stack

### **Backend Core**
* **FastAPI:** Asynchronous engine for the Enforcement Layer.
* **Firebase Admin:** Real-time state synchronization with the global registry.
* **Uvicorn:** High-performance ASGI orchestration.

### **Frontend & UX**
* **React.js & Tailwind CSS:** "Command Center" UI with real-time countdowns.
* **Lucide Icons:** Minimalist, high-clarity security iconography.

### **Database & Auth**
* **Firebase RTDB:** Global state management for instant IP whitelisting.
* **Firebase Auth:** Multi-factor authentication for developer access.

---

## ⚡ Setup Requirements

1. **Credentials:** Place `serviceAccountKey.json` in the `/backend` directory.
2. **Configuration:** Update `firebaseConfig.js` with your Project ID and API Keys.
3. **Lockdown:** Ensure CORS is strictly bound to your production frontend domain.

---

<div align="center">

### **Protocol Manifested by the Ghost Team**
*Designed for security. Built for stealth.*

</div>
