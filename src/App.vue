<template>
  <nav>
    <router-link to="/">Accueil</router-link>
    <router-link to="/button">Button</router-link>
  </nav>
  <div>
    <router-view></router-view>
  </div>
</template>
<script setup>

</script>
<style scoped>
  nav {
    @apply block leading-8 border-b-2 border-solid border-gray-400;
  }
  a {
    @apply inline-block px-4 py-2 w-32 text-center;
  }
</style>