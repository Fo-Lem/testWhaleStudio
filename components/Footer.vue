<template>
    <footer class="footer" :class="{ 'menu-open': menuOpen }">
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
        <div v-if="!isLoadingSliders" class="swiper-navigation" :class="{ 'menu-open': menuOpen }">

            <button class="swiper-navigation-prev"><IconBase :height="12" :width="8" :heightViewBox="12" :watchViewBox="8" iconName="IconArrowLeft"><IconsIconLeftArrow /></IconBase></button>
            <span class="swiper-navigation-fraction">
            </span>
            <button class="swiper-navigation-next"><IconBase :height="12" :width="8" :heightViewBox="12" :watchViewBox="8" iconName="IconArrowLeft"><IconsIconRightArrow /></IconBase></button>

        </div>
    </footer>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp()
const isLoadingSliders = nuxtApp.$isLoadingSliders

defineProps({
    menuOpen: {
        type: Boolean,
        default: false
    }
})

 
</script>

<style scoped></style>