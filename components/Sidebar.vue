<template>
    <nav v-if="menuOpen" class="header-sidebar" :class="{ 'open': menuOpen }">
            <div class="header-sidebar__container">
                <NuxtLink to="/" class="header-logo">
                <h1>AR.CHI</h1>
            </NuxtLink>
            <div class="header-divider" />
            <div class="header-lang">
                <button class="header-lang-button">RUS</button>
                <button class="header-lang-button active">ENG</button>
            </div>
            <button @click="menuOpen = !menuOpen" class="header-menu-button">
                <span>Close</span>
                <IconBase :height="20" :width="20" :heightViewBox="14" :watchViewBox="14">
                    <IconsIconClose></IconsIconClose>
                </IconBase>
            </button>
            </div>
            
            <div class="header-sidebar-links">
                <ul class="header-sidebar-links__list">
                    <li class="header-sidebar-links-item">
                        <NuxtLink to="/#">About us</NuxtLink>
                        <NuxtImg class="header-sidebar-links-item-img left" :src="'interiorImage.png'"></NuxtImg>
                    </li>
                    <li class="header-sidebar-links-item">
                        <NuxtLink to="/#">Architecture</NuxtLink>
                        <NuxtImg class="header-sidebar-links-item-img right" :src="'architectureImage.png'"></NuxtImg>

                    </li>
                    <li class="header-sidebar-links-item">
                        <NuxtLink to="/#">Interior</NuxtLink>
                        <NuxtImg class="header-sidebar-links-item-img left" :src="'interiorImage.png'"></NuxtImg>
                    </li>
                    <li class="header-sidebar-links-item">
                        <NuxtLink to="/#">Contact</NuxtLink>
                        <NuxtImg class="header-sidebar-links-item-img right" :src="'architectureImage.png'"></NuxtImg>
                    </li>
                    <li class="header-sidebar-links-item">
                        <NuxtLink to="/#">Shop</NuxtLink>
                        <NuxtImg class="header-sidebar-links-item-img left" :src="'interiorImage.png'"></NuxtImg>
                    </li>
                </ul>
            </div>
        </nav>
</template>

<script setup lang="ts">

const menuOpen = defineModel<boolean>('menuOpen')

</script>

<style scoped>

</style>