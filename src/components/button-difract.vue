<template>
    <button><slot/></button>
</template>
<script setup>

</script>
<style scoped>
    * {
        @apply box-border;
    }
    button {
        @apply inline-block relative px-4 py-2 border-blue-700 border-solid border-[1px] font-bold cursor-pointer bg-transparent z-[2];
    }
    button::after, button::before {
        @apply absolute inline-block w-full h-full top-0 left-0 translate-x-0 translate-y-0 transition border-blue-700 border-solid border-[1px];
        transition: transform .5s, border-color .5s;
        content:'';
    }
    button:hover::before {
        @apply translate-x-[4px] translate-y-[5px] border-red-700;
    }
    button:hover::after {
        @apply translate-x-[-5px] translate-y-[-4px] border-green-700;
    }

</style>