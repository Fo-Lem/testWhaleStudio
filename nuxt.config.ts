// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["nuxt-swiper", "@nuxt/image"],
    app: {
        head: {
            title: "AR.CHI",
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { hid: "description", name: "description", content: "AR.CHI" }
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
            ]
        }
    },
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.NUXT_API_BASE_URL
        }
    },
    css: ['assets/main.scss'],
})