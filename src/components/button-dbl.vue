<template>
    <button>
        <span>{{props.title}}</span>
        <slot/>
    </button>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title:{
        type:String,
        default:'XXX'
    }
})

</script>
<style scoped>
    button {
        @apply relative px-10 py-2 text-white box-content;
        @apply border-blue-500 border-2 border-solid text-black;
        @apply transition-all hover:rounded-[22px] hover:bg-blue-500 hover:text-white;
    }
    button>span{
        @apply inline-block absolute top-[-16px] left-[-32px] z-0;
        @apply whitespace-nowrap px-4 bg-transparent text-black leading-8;
    }
    button>span::before {
        @apply inline-block absolute left-0 top-0 z-[-1] content-[''];
        @apply text-xs w-[100%] h-8 bg-white skew-x-[-22deg] border-red-700 border-2 border-solid;
        @apply py-4 px-0 max-h-8;
    }
    button:hover>span::before {
        @apply bg-red-700;
    }
    button:hover>span {
        @apply text-white;
    }
</style>