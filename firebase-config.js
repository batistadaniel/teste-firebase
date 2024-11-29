// Configuração do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAtgfGJyv1IR0ZfOR5TLkkCXphmQ21sUTQ",
  authDomain: "teste-firebase-2-ab055.firebaseapp.com",
  projectId: "teste-firebase-2-ab055",
  storageBucket: "teste-firebase-2-ab055.firebasestorage.app",
  messagingSenderId: "104641738429",
  appId: "1:104641738429:web:61805f610a8636d7e069d4",
  measurementId: "G-Y0GKD7L3ZC"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
