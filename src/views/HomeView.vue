<!-- src/views/HomeView.vue -->
<template>
    <div>
      <h1>Home</h1>
      <p>Bienvenido a la página del Home.</p>
      <button @click="logout">Cerrar sesión</button>
      <Modal :visible="showModal" message="Debe estar registrado y logueado para ingresar al Home." @close="handleModalClose" />
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
  import Modal from '../components/MoDal.vue';
  
  export default {
    components: {
      Modal
    },
    setup() {
      const router = useRouter();
      const auth = getAuth();
      const showModal = ref(false);
  
      onMounted(() => {
        onAuthStateChanged(auth, (user) => {
          if (!user) {
            showModal.value = true;
          }
        });
      });
  
      const handleModalClose = () => {
        showModal.value = false;
        router.push('/login');
      };
  
      const logout = async () => {
        try {
          await signOut(auth);
          router.push('/login');
        } catch (error) {
          console.error('Error al cerrar sesión:', error);
        }
      };
  
      return { logout, showModal, handleModalClose };
    }
  };
  </script>
  
  <style>
  /* Estilos personalizados para HomeView */
  button {
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #f44336; /* Rojo */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #d32f2f; /* Rojo más oscuro */
  }
  </style>
  