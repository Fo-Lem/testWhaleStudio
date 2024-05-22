<template>
    <header class="header">
        <nav class="header__container" :class="{ 'search-open': inputSearchOpen, 'menu-open': menuOpen }">
            <NuxtLink to="/" class="header-logo">
                <h1>AR.CHI</h1>
            </NuxtLink>
            <div class="header-divider" />
            <div class="header-lang">
                <button class="header-lang-button">RUS</button>
                <button class="header-lang-button active">ENG</button>
            </div>
            <div v-if="!menuOpen && !inputSearchOpen" class="header-links">
                <ul class="header-links__list">
                    <li class="header-links__item">
                        <NuxtLink to="/#">About us</NuxtLink>
                    </li>
                    <li class="header-links__item">
                        <NuxtLink to="/#">Architecture</NuxtLink>
                    </li>
                    <li class="header-links__item">
                        <NuxtLink to="/#">Interior</NuxtLink>
                    </li>
                    <li class="header-links__item">
                        <NuxtLink to="/#">Contact</NuxtLink>
                    </li>
                    <li class="header-links__item">
                        <NuxtLink to="/#">Shop</NuxtLink>
                    </li>
                </ul>
            </div>

            <div v-if="!menuOpen" class="header-search" :class="{ 'open': inputSearchOpen, 'menu-open': menuOpen }">
                <div class="header-search__container">
                    <button @click="() => {
                        if (!inputSearchOpen) {
                            inputSearchOpen = true
                        } else {
                            //search
                        }
                    }" class="header-search-button">
                        <IconBase iconName="IconSearch" :height="20" :width="20">
                            <IconsIconSearch />
                        </IconBase>
                    </button>
                    <input class="header-search-input" type="text" placeholder="What are you looking for?">
                    <button @click="inputSearchOpen = false" class="header-search-button-close">
                        <IconBase iconName="IconClose" :height="14" :width="14" :heightViewBox="14" :watchViewBox="14">
                            <IconsIconClose />
                        </IconBase>
                    </button>
                    <div class="header-search-divider" />
                </div>
            </div>
            <button @click="menuOpen = !menuOpen" class="header-menu-button" :class="{ 'menu-open': menuOpen }">
                <span v-if="menuOpen">Close</span>
                <IconBase v-if="!menuOpen" :height="26" :width="26" :heightViewBox="26" :watchViewBox="26"
                    iconName="IconMenu">
                    <IconsIconMenu />
                </IconBase>
                <IconBase v-else :height="20" :width="20" :heightViewBox="14" :watchViewBox="14">
                    <IconsIconClose></IconsIconClose>
                </IconBase>
            </button>
        </nav>
        <nav class="header-sidebar" :class="{ 'open': menuOpen }">
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
    </header>
</template>

<script setup lang="ts">

const menuOpen = defineModel<boolean>('menuOpen')
const inputSearchOpen = ref(false)

</script>

<style scoped></style>