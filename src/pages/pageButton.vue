<template>
  <div class="gridExemple">
    <span>
      <buttonDifractVue>Test de bouton</buttonDifractVue>
    </span>
    <span>
      <buttonSouligne>Test de bouton</buttonSouligne>
    </span>
    <span>
      <buttonNeon>Test de bouton</buttonNeon>
    </span>
    <span>
      <buttonDbl title="Test">de Bouton</buttonDbl>
    </span>
    <span>
      <buttonRadius>Test de Bouton</buttonRadius>
    </span>
    <span>
      <ButtonSliced>Test de bouton</ButtonSliced>
    </span>
  </div><br>
  &nbsp;
  <div class="text-center">
    <a href="https://github.com/rolandmerlin/webdesignElement/tree/main/src/components" class="underline">Sources des boutons</a>
  </div>
</template>
<script setup>
import buttonDifractVue from '../components/button-difract.vue'
import buttonSouligne from '../components/button-souligne.vue'
import buttonNeon from '../components/button-neon.vue'
import buttonDbl from '../components/button-dbl.vue'
import buttonRadius from '../components/button-radius.vue'
import ButtonSliced from '../components/button-sliced.vue'
</script>
<style>
  .gridExemple {
    @apply grid grid-cols-2 text-center;
  }
  .gridExemple>* {
    @apply h-24 p-4;
  }
</style>