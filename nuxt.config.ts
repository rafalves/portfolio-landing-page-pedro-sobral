// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vee-validate/nuxt', 'nuxt-icon'],
  css: ['@/assets/css/main.css'],
  veeValidate: {
    autoImports: true,
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
})
