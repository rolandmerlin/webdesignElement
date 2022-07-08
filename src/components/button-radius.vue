<template>
    <button>
        <b><slot/></b>
    </button>
</template>
<script setup>

</script>
<style scoped>
    button {
        @apply px-4 py-2 border-blue-300 border-2 border-solid transition-colors;
        @apply rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md;
        @apply text-white  hover:text-black;
        @apply hover:bg-blue-200/75 bg-blue-700/75;
        transform:skewX(-10deg);
    }
</style>