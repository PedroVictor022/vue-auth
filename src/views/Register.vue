<template>
   <div class="main">
      <h2>Register</h2>
      <div class="form">
         <input type="text" placeholder="email" v-model="email">
         <input type="text" placeholder="password" v-model="password">
      </div>
      <div class="btn-group">
         <button class="btn1">Submit</button>
         <button class="btn2" >Sing In with Google</button>
      </div>
   </div>
</template>
<script>
   import { ref } from 'vue';


</script>

<style>
   .main {
      margin:0 auto;
      text-align: center;
      max-width:320px;
      background-color: #222;
      color: aliceblue;
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
      border:none;
      padding: 0.2rem;
      border-radius: 4px;
      cursor:pointer;
      font-weight: bold;
      font-size: 13px;
   }
   .btn1 {
      background: #5517c9;
      color: aliceblue;
   }
   .btn1:hover {
      background: #7d47e0;
   }
   .btn2 {
      background: #1791c9;
      color: aliceblue;
   }
   .btn2:hover {
      background: #4796e0;
   }
</style>