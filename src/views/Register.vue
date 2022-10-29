<template>
   <div class="main">
      <h2>Register</h2>
      <div class="form">
         <input type="text" placeholder="email" v-model="email">
         <input type="text" placeholder="password" v-model="password">
      </div>
      <div class="btn-group">
         <button class="btn1" v-on:click="register()">Submit</button>
         <button class="btn2" >Sing In with Google</button>
      </div>
   </div>
</template>
<script setup>
   import { ref } from 'vue';
   import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
   import { useRouter } from 'vue-router';

   const router = useRouter();
   const email = ref("");
   const password = ref("");

   const auth = getAuth();
   const register = () => {
      createUserWithEmailAndPassword(auth, email.value, password.value) 
      .then((data) => {
         console.log(data, 'Successfullly registered');
         console.log(auth, auth.currentUser);
         router.push('/feed');
      })
      .catch((error) => {
         console.log(error);
         alert(error.message);
      })
   };

   const signInWithGoogle = () => {

   }


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