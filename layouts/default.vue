<template>
    <div  class="wrapper">
        <Header v-model:menu-open="menuOpen"/>
        <main class="main">
            <slot />
        </main>
        <Footer :menu-open="menuOpen"/>
    </div>
</template>

<script setup lang="ts">


const menuOpen = ref(false)

</script>

<style scoped>

</style>