<template>
   <header>
      <h1>Bem vindo ao Portal.org</h1>
      <nav>
         <router-link to="/">Home</router-link>
         <router-link to="/register">Register</router-link>
         <router-link to="/feed">Feed</router-link>
         <router-link to="/sing-in">Sing In</router-link>
         <button @click="handleSingOut()" v-if="isLoggedIn">Sing Out</button>
      </nav>
   </header>
   <p>{{ isLoggedIn ? "Usuario online" : "Nao logado"}}</p>
</template>

<script setup>
   import { onMounted, ref } from 'vue';
   import { getAuth, onAuthStateChanged, signOut} from "firebase/auth"
   import { useRouter } from 'vue-router';


   const router = useRouter();
   const isLoggedIn = ref(false);
   let auth;
   onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
         if(user) {
            isLoggedIn.value = true;
         } else {
            isLoggedIn.value = false;
         }
      })
   })


   const handleSingOut = () => {      
      signOut(auth).then(() => {
         router.push('/');
      });
   }

</script>

<style scoped>
   header {
      background: #222;
      padding: 1.5rem;
      color: #f2f2f2;

      gap: 0.5rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      margin-bottom: 2rem;
   }

   nav {
      display: flex;
      align-items:center;
      gap: 1rem;
   }

   a {
      text-decoration: none;
      color: #f2f2f2;
      padding: 0.3rem;
   }
   a:hover{
      text-decoration: underline 1px solid;
   }
</style>