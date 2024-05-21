<template>
    <nav class="header">
        <div class="header__container">
            <NuxtLink to="/" class="header-logo">
                <h1>AR.CHI</h1>
            </NuxtLink>
            <div class="header-divider"/>
            <div class="header-lang">
                Выбор языка
            </div>
            <div class="header-empty"></div>
            <div class="header-links">
                <ul class="header-links__list">
                    <li class="header-links__item">
                        <NuxtLink to="/#">About us</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/#">Architecture</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/#">Interior</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/#">Contact</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/#">Shop</NuxtLink>
                    </li>
                </ul>
            </div>

            <div class="header-search">
                <IconBase iconName="IconSearch">
                    <IconsIconSearch />
                </IconBase>
            </div>

            <IconBase class="header-menu-button" :height="26" :width="26" :heightViewBox="26" :watchViewBox="26" iconName="IconMenu">
                <IconsIconMenu />
            </IconBase>




        </div>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped></style>