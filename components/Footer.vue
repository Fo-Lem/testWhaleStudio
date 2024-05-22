<template>
    <footer class="footer">
        <div class="footer-links" :class="{ 'menu-open': menuOpen }">
            <ul class="footer-links__list">
                <li class="footer-links-item">
                    <NuxtLink to="/#">Facebook</NuxtLink>
                </li>
                <li class="footer-links-item">
                    <NuxtLink to="/#">Vkontakte</NuxtLink>

                </li>
                <li class="footer-links-item">
                    <NuxtLink to="/#">Behance</NuxtLink>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script setup lang="ts">
defineProps({
    menuOpen: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped></style>