<script>
import Header from './components/Header.vue';
  export default {
    components: {
      Header
    }
  }
</script>

<template>
  <Header />
  <router-view />
</template>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
