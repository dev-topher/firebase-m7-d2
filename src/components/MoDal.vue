<!-- src/components/Modal.vue -->
<template>
    <div v-if="visible" class="modal-overlay">
      <div class="modal">
        <p>{{ message }}</p>
        <button @click="confirm">OK</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['visible', 'message'],
    emits: ['close'],
    methods: {
      confirm() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  button {
    background: #1E90FF;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
  }
  </style>
  