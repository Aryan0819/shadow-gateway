// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Added for the gateway status
import { getAuth } from "firebase/auth";         // Added for the secure login

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo-oBkYj6wH0FE1ZpjhY7D2aFEbIoNnDE",
  authDomain: "shadow-gateway.firebaseapp.com",
  databaseURL: "https://shadow-gateway-default-rtdb.firebaseio.com",
  projectId: "shadow-gateway",
  storageBucket: "shadow-gateway.firebasestorage.app",
  messagingSenderId: "155383171519",
  appId: "1:155383171519:web:22b3bd6bb6ec3cd738f90a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// EXPORT these so App.js can import them
export const database = getDatabase(app);
export const auth = getAuth(app);