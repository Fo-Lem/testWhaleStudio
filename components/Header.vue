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
            <button @click="menuOpen = !menuOpen" class="header-menu-button">
                <IconBase :height="26" :width="26" :heightViewBox="26" :watchViewBox="26"
                    iconName="IconMenu">
                    <IconsIconMenu />
                </IconBase>
            </button>
        </nav>
        
    </header>
</template>

<script setup lang="ts">

const menuOpen = defineModel<boolean>('menuOpen')
const inputSearchOpen = ref(false)

</script>

<style scoped></style>