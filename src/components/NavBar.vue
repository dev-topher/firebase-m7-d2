<!-- src/components/NavBar.vue -->
<template>
    <nav>
      <ul>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/signup">Sign Up</router-link></li>
        <li><router-link to="/home">Home</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { RouterLink } from 'vue-router';
  
  export default {
    components: {
      RouterLink
    }
  };
  </script>
  
  <style>
  nav {
    background-color: #333;
    color: white;
    padding: 1rem;
  }
  
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  </style>
  