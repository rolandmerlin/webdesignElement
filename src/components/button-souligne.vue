<template>
    <button v-on:mouseenter="mouseenter()" v-on:mouseleave="mouseleave()" :class="'btnSoul'+stateBtn">
        <slot/>
    </button>
</template>
<script setup>
import {ref} from 'vue'
const stateBtn = ref(0)

let hwnd = false
function mouseenter(){ stateBtn.value = 1 }
function mouseleave(){
    stateBtn.value = 2
    let hwnd = setTimeout(()=>{ if (stateBtn.value == 2) stateBtn.value = 0 },500)
}
</script>
<style scoped>
    button { @apply inline-block px-4 py-2 relative cursor-pointer; }
    button::after { @apply bg-blue-700 absolute left-0 bottom-0 left-0 h-[2px] content-['']; }
    .btnSoul0::after { @apply transition-none left-0 w-0; }
    .btnSoul1::after { @apply transition-all duration-500 left-0 w-full; }
    .btnSoul2::after { @apply transition-all duration-500 left-[100%] w-0; }
</style>