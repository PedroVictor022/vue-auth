<template>
   <div class="main">
      <h2>SingIn</h2>
      <div class="form">
         <p v-if="errorMsg">{{errorMsg}}</p>
         <input type="text" placeholder="email" v-model="email">
         <input type="text" placeholder="password" v-model="password">
      </div>
      <div class="btn-group">
         <button class="btn1" v-on:click="register()">Submit</button>
         
      </div>
   </div>
</template>

<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref("");
const password = ref("");
const errorMsg = ref();

const auth = getAuth();
const register = () => {
   signInWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
         console.log(data, 'Successfullly singned in!');
         console.log(auth, auth.currentUser);
         router.push('/feed');
      })
      .catch((error) => {
         switch(error.code) {
            case "auth/invalid-email":
               errorMsg.value = "Email invalido"
               break;
            case "auth/user-not-found":
               errorMsg.value = "Conta nao encontrada no banco de dados"
               break;
            case "auth/wrong-password":
               errorMsg.value = "Senha incorreta"
               break;
            default:
               errorMsg.value = "Email or password was incorrect";
               break;
         }
      })
};


</script>


<style>
   .main {
      margin:0 auto;
      text-align: center;
      max-width:320px;
      color: black;
      padding: 1rem;
   }
   .form {

      display: flex;
      flex-direction: column;
      max-width: 200px;
      gap:0.5rem;
      margin: 1rem auto;
   }
   .btn-group{ 
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      width:180px;
      margin: 0 auto;
      padding-bottom: 0.8rem;
   }
   .btn1, .btn2 {
      transition: .2s;
      padding: 0.2rem;
      cursor:pointer;
      font-weight: bold;
      font-size: 13px;
   }
</style>