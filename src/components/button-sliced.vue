<template>
    <button>
        <div><span><slot/></span></div>
        <div><span><slot/></span></div>
    </button>
</template>
<script setup>

</script>
<style scoped>
button {
    @apply px-8 pt-3 pb-1 w-72;
    @apply border-2 border-solid border-black relative;
    @apply transition-all duration-300;
}
button div {
    @apply overflow-hidden max-h-3 h-3 relative translate-y-[-6px];
    @apply transition-all duration-300 delay-300;
}
button div span {
    @apply delay-1000 left-[50%] translate-x-[-50%];
}
button div:first-child span {
    @apply absolute top-0 delay-75;
}
button div:last-child span {
    @apply absolute bottom-0 delay-75;
}
button:hover div:first-child {
    @apply top-[-5px];
}
button:hover div:last-child {
    @apply bottom-[-5px];
}
button:before {
    @apply content-[''] h-[1px] w-14;
    @apply absolute mt-[6px] right-[-35px] border-black border-[1px] border-solid;
    @apply transition-all duration-1000;
}
button:hover:before {
    @apply w-[130%];
}

</style>