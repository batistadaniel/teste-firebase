import { auth } from './firebase-config.js';
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Verifica se o usuário está logado
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(`Usuário logado: ${user.email}`);
  } else {
    // Redireciona para a página de login se não estiver logado
    window.location.href = "index.html";
  }
});

// Função de logout
document.getElementById('logoutButton').addEventListener('click', async () => {
  try {
    await signOut(auth);
    alert("Você saiu com sucesso!");
    window.location.href = "index.html"; // Redireciona para a página de login
  } catch (error) {
    alert(`Erro ao sair: ${error.message}`);
  }
});
