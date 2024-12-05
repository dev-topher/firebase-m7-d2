// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import { auth } from './firebase';
import SignUpView from './views/SignUpView.vue';
import LoginView from './views/LoginView.vue';
import HomeView from './views/HomeView.vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/signup', component: SignUpView },
  { path: '/login', component: LoginView },
  { path: '/home', component: HomeView, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser;
  if (requiresAuth && !isAuthenticated) {
    alert('Debe estar registrado y logueado para ingresar al Home');
    next('/login');
  } else {
    next();
  }
});

export default router;
