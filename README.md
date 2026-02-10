# 🛡️ SHADOW GATEWAY: THE GHOST PROTOCOL
> **Software-Defined Air-Gap & Zero-Trust Infrastructure**
> *Developed by Aryan | B.Tech CSE (AI & ML) | Google Student Ambassador*

<p align="center">
  <img src="https://img.shields.io/badge/Security-Zero--Trust-emerald?style=for-the-badge&logo=google-cloud" />
  <img src="https://img.shields.io/badge/Access-JIT--Temporal-blue?style=for-the-badge&logo=python" />
  <img src="https://img.shields.io/badge/Stack-React--FastAPI-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Database-Firebase-FFCA28?style=for-the-badge&logo=firebase" />
</p>

---

## 🌌 Overview
**Shadow Gateway** is a high-security infrastructure project designed to eliminate server exposure to the public internet. Instead of leaving a backend API open to brute-force attacks and scanners, the server remains in a **Ghost State**—returning a `404 Not Found` to everyone—until an authorized administrator "Summons" it through a secure control plane.

[Image of a sequence diagram showing a frontend application calling a protected backend API through a gateway]

### 🔒 Core Security Logic
* **Stealth Mode:** The FastAPI backend returns a `404 Not Found` by default, ensuring the server doesn't even acknowledge its existence to unauthorized traffic.
* **Summoning Mechanism:** Admin authentication is verified via **Firebase Auth** before a "Summon" signal is accepted.
* **IP-Based Whitelisting:** The gateway captures the admin's specific IP and authorizes it at the middleware level.
* **JIT (Just-In-Time) Self-Destruct:** A 30-minute temporal access window is created. Once the timer hits zero, a background thread collapses the bridge, wiping the authorized IP and returning the server to its Ghost State.

---

## 🛠️ Tech Stack
| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React.js & Tailwind | Cyber-Ops Dashboard & JIT Timer |
| **Backend** | FastAPI (Python) | Ghost Middleware & IP Enforcement |
| **Control Plane** | Firebase RTDB | Real-time state synchronization |
| **Auth** | Firebase Auth | Secure Admin Access Control |
| **Logic** | Python Threading | Asynchronous JIT Auto-Lock |

---

## ⚡ Quick Start

### 1️⃣ Backend Setup
```bash
# Navigate to backend
cd shadow-gateway/backend

# Install dependencies
pip install fastapi uvicorn firebase-admin

# Security Configuration
# Place 'serviceAccountKey.json' in this folder

# Launch the Ghost Server
python main.py
'''

2. The Control Plane (Frontend)
Bash
cd frontend
npm install lucide-react
npm start
🛡️ Security Protocol Architecture
Temporal Security: Access is limited not just by identity, but by time, minimizing the attack surface significantly.

Zero-Trust: Every single request is validated against the real-time authorized IP stored in Firebase.

Ghosting: No "Forbidden" headers are sent. The server mimics a non-existent endpoint to prevent footprinting.

<div align="center">

✨ Showcase your role as a Google Student Ambassador
</div>


-----

### Why this version stands out:

  * **Center Alignment:** The `<div>` tags make the header look much more like a professional landing page.
  * **Feature Cards:** The Markdown table for features creates a clean, 3-column "card" look.
  * **Interactive Feel:** Using Shields.io badges makes the repository look maintained and high-quality.

**Would you like me to help you create a specific "How it Works" section with a Mermaid.js diagram to show the IP-locking logic visually?**
