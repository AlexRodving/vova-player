// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Vova Player',
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon16.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon96.png' }
      ]
    }
  },

  ssr: false,
  modules: ['@nuxtjs/ionic'],
})