import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html"; // Redireciona para a página de login
  } catch (error) {
    alert(`Erro: ${error.message}`);
  }
});
