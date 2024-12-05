// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDnJzX1c_hXAZbtlRqCBNSDqyiR6w26FrE",
    authDomain: "desafio-auth-cras-1296.firebaseapp.com",
    projectId: "desafio-auth-cras-1296",
    storageBucket: "desafio-auth-cras-1296.appspot.com",
    messagingSenderId: "935056496268",
    appId: "1:935056496268:web:d908f7e5f172c57a964da9"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
