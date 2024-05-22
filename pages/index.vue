<template>
    
        <Swiper v-if="!isLoadingSliders" @_swiper="swiperInit" class="swiper" :navigation="{
            enabled: true,
            nextEl: '.swiper-navigation-next',
            prevEl: '.swiper-navigation-prev'
        }" :pagination="{
            el: '.swiper-navigation-fraction',
            type: 'fraction',
            progressbarFillClass: '.swiper-navigation-scrollbar',
            formatFractionCurrent: function (number) {

                return number < 10 ? '0' + number : number
            },
            formatFractionTotal: function (number) {
                return number < 10 ? '0' + number : number
            },
            renderFraction(currentClass, totalClass) {
                return `
                <span class='${currentClass}'></span>
                <div style='' class='swiper-navigation-scrollbar'>
                    <div style='' class='swiper-navigation-drag'></div>
                </div>
                 <span class='${totalClass}'></span>
                 `
            },
        }" :scrollbar="{ el: '.swiper-navigation-scrollbar', draggable: true }"
        :allowTouchMove="false" :effect="'fade'"
            :modules="[Scrollbar, Navigation, Pagination, EffectFade]" :slides-per-view="1">


            <SwiperSlide v-for="slide in slides" :key="slide.id">

                <div class="swiper-slide__container">

                    <NuxtImg class="swiper-slide-image" placeholder placeholder-class="custom" :src="slide.image"
                        :alt="slide.title" />
                    <div class="swiper-slide__content">

                        <h2 class="swiper-slide-title">{{ slide.title }}</h2>

                        <div class="swiper-slide-description">
                            <div class="swiper-slide-description__col">
                                <h4 class="swiper-slide-description-title">
                                    {{ slide.description.col1.title }}
                                </h4>
                                <p class="swiper-slide-description-text">
                                    {{ slide.description.col1.description }}
                                </p>
                            </div>

                            <div class="swiper-slide-description__col">
                                <h4 class="swiper-slide-description-title">
                                    {{ slide.description.col2.title }}
                                </h4>
                                <p class="swiper-slide-description-text">
                                    {{ slide.description.col2.description }}
                                </p>
                            </div>
                        </div>
                        <div class="swiper-slide__buttons">

                            <button class="swiper-slide-button-read">Read More</button>
                            <button class="swiper-slide-button-view"><IconBase class="swiper-slide-button-view-icon" :height-view-box="26" :watch-view-box="26" :height="40" :width="40" iconName="IconPlay"><IconsIconPlay /></IconBase> View project</button>

                        </div>


                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    
</template>

<script setup lang="ts">
import type Swiper from 'swiper';
import { Scrollbar, Navigation, Pagination, EffectFade } from 'swiper/modules';
const { apiGetSliders } = useAPI()
const isLoadingSliders = ref(true)
const nuxtApp = useNuxtApp()
nuxtApp.provide('isLoadingSliders', isLoadingSliders)

const slides = ref<Slide[]>([])

async function getSliders() {
    const res = await apiGetSliders()
    return res
}
function swiperInit(swiper: Swiper) {
    setTimeout(() => {
        if (process.client) {
            const el = document.querySelector('.swiper-navigation-scrollbar') as HTMLElement;
            const dragEl = document.querySelector('.swiper-navigation-drag') as HTMLElement;
            swiper.scrollbar.el = el
            swiper.scrollbar.dragEl = dragEl
            swiper.scrollbar.init();
            swiper.scrollbar.updateSize();
        }
    }, 1)
}

const { data } = await useAsyncData(`getSliders`, async () => {
    return getSliders()
})

slides.value = data && data.value ? data.value : []
isLoadingSliders.value = false

</script>

<style scoped></style>