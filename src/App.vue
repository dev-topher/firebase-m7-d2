<!-- src/App.vue -->
<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';

export default {
  components: {
    NavBar,
    RouterView
  },
};
</script>
