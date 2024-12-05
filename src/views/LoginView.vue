<!-- src/views/LoginView.vue -->
<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input v-model="email" type="email" placeholder="Email" required>
        <input v-model="password" type="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
      <p>¿Aún no tiene cuenta? <router-link class="signup-link" to="/signup">Regístrese aquí</router-link></p>
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <Modal :visible="showModal" message="Falló al iniciar sesión. Verifique sus credenciales o bien regístrese para tener acceso." @close="handleModalClose" />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
  import Modal from '../components/MoDal.vue';
  
  export default {
    components: {
      Modal
    },
    setup() {
      const email = ref('');
      const password = ref('');
      const showModal = ref(false);
      const errorMessage = ref('');
      const router = useRouter();
      const auth = getAuth();
  
      const login = async () => {
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          router.push('/home');
        } catch (error) {
          showModal.value = true;
        }
      };
  
      const handleModalClose = () => {
        showModal.value = false;
        router.push('/signup');
      };
  
      return { email, password, login, showModal, handleModalClose, errorMessage };
    }
  };
  </script>
  
  <style>
  .signup-link {
    color: #1E90FF; /* Azul agradable */
    text-decoration: none;
    font-weight: bold;
  }
  
  .signup-link:hover {
    text-decoration: underline;
  }
  </style>
  