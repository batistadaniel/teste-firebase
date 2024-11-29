import { auth } from './firebase-config.js';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Lógica para Cadastro
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Cadastro realizado com sucesso!");
      window.location.href = "index.html"; // Redireciona para login
    } catch (error) {
      alert(`Erro no cadastro: ${error.message}`);
    }
  });
}

// Lógica para Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login realizado com sucesso!");
      window.location.href = "home.html"; // Redireciona para a home
    } catch (error) {
      alert(`Erro no login: ${error.message}`);
    }
  });
}

// Lógica para Logout e Proteção da Página Home
const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "index.html"; // Redireciona se não estiver logado
    }
  });

  logoutButton.addEventListener('click', async () => {
    try {
      await signOut(auth);
      alert("Logout realizado com sucesso!");
      window.location.href = "index.html";
    } catch (error) {
      alert(`Erro ao sair: ${error.message}`);
    }
  });
}
