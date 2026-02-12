import React, { useState, useEffect } from 'react';
import { database } from './firebaseConfig';
import { ref, update, onValue } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ShieldCheck, ShieldAlert, Lock, Unlock, Loader2, Timer } from 'lucide-react';

function App() {
  const [gateStatus, setGateStatus] = useState("LOCKED");
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(1800);
  const [vaultData, setVaultData] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    // Ensure these credentials match your Firebase "Users" tab exactly
    signInWithEmailAndPassword(auth, "aryan@gateway.com", "123456")
      .then(() => {
        onValue(ref(database, 'gate_status'), (snapshot) => {
          setGateStatus(snapshot.val() || "LOCKED");
          setLoading(false);
        });
      })
      .catch(err => console.error("Login Error:", err));
  }, []);

  useEffect(() => {
    let interval = (gateStatus === "OPEN" && timeLeft > 0) ? 
      setInterval(() => setTimeLeft(prev => prev - 1), 1000) : null;
    if (gateStatus === "LOCKED") setTimeLeft(1800);
    return () => clearInterval(interval);
  }, [gateStatus, timeLeft]);

  const toggleGate = async () => {
    if (gateStatus === "LOCKED") {
      await fetch('http://localhost:8000/api/summon', { method: 'POST' });
    } else {
      await update(ref(database, '/'), { gate_status: "LOCKED", authorized_ip: "" });
    }
  };

  const formatTime = (s) => `${Math.floor(s/60)}:${(s%60).toString().padStart(2, '0')}`;

  if (loading) return <div className="min-h-screen bg-slate-950 flex items-center justify-center"><Loader2 className="text-emerald-500 animate-spin" /></div>;

  return (
    <div className={`min-h-screen flex items-center justify-center transition-all duration-1000 ${gateStatus === 'LOCKED' ? 'bg-slate-950' : 'bg-emerald-950'}`}>
      <div className="w-full max-w-md p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-3xl text-center">
        {gateStatus === 'LOCKED' ? <ShieldAlert size={70} className="text-red-500 mx-auto mb-6" /> : <ShieldCheck size={70} className="text-emerald-400 mx-auto mb-6" />}
        <h1 className="text-2xl font-black text-white mb-6">SHADOW GATEWAY</h1>
        {gateStatus === "OPEN" && (
          <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
            <div className="flex justify-center items-center gap-2 text-emerald-500 text-[10px] font-black uppercase tracking-widest"><Timer size={14}/> Bridge Stability</div>
            <p className="text-3xl font-mono text-white font-bold">{formatTime(timeLeft)}</p>
          </div>
        )}
        <button onClick={toggleGate} className={`w-full py-5 rounded-2xl font-bold text-white flex items-center justify-center gap-3 mb-4 ${gateStatus === 'LOCKED' ? 'bg-red-600' : 'bg-emerald-600'}`}>
          {gateStatus === 'LOCKED' ? <Unlock size={20}/> : <Lock size={20}/>} {gateStatus === 'LOCKED' ? "SUMMON SERVER" : "GO DARK"}
        </button>
        <button onClick={async () => {
          try {
            const r = await fetch('http://localhost:8000/api/vault');
            const d = await r.json();
            setVaultData(d.content || "Ghosted (404)");
          } catch { setVaultData("Ghosted (404)"); }
        }} className="w-full py-3 rounded-2xl border border-white/10 text-slate-400 text-sm">Ping Vault</button>
        {vaultData && <div className="mt-6 p-4 bg-black/40 rounded-xl border border-white/5 text-emerald-400 font-mono text-sm">{vaultData}</div>}
      </div>
    </div>
  );
}

export default App;