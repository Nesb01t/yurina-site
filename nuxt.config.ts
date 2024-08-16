// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: [{ src: '~/plugins/vue-masonry-wall', mode: 'client' }],
  ssr: false,
})
