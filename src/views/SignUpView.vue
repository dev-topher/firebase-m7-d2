<!-- src/views/SignUpView.vue -->
<template>
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="signUp">
        <input v-model="email" type="email" placeholder="Email" required>
        <input v-model="password" type="password" placeholder="Password" required>
        <button type="submit">Sign Up</button>
      </form>
      <p v-if="errorMessage">{{ errorMessage }}</p>
      <Modal :visible="showModal" message="Registro exitoso. Ahora puede iniciar sesión." @close="handleModalClose" />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
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
  
      const signUp = async () => {
        try {
          await createUserWithEmailAndPassword(auth, email.value, password.value);
          showModal.value = true;
          
        } catch (error) {
          errorMessage.value = 'Error al registrarse. Intente nuevamente.';
        }
      };

      const handleModalClose = () => {
        showModal.value = false;
        router.push('/login');
      };
  
      return { email, password, signUp, showModal, handleModalClose, errorMessage };
    }
  };
  </script>
  
  <style>
  /* Estilos personalizados para SignUpView */
  </style>
  