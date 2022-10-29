import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { config } from 'dotenv';

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCipkol844gtKOFbAQbkEC5oKYIXhi3yiM",
  authDomain: "testando-login.firebaseapp.com",
  projectId: "testando-login",
  storageBucket: "testando-login.appspot.com",
  messagingSenderId: "210116723729",
  appId: "1:210116723729:web:7cf451485fa7ee66551db0",
  measurementId: "G-SVTXFPE14Q"
};
initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.mount('#app')