// https://v3.nuxtjs.org/api/configuration/nuxt.config
import {defineNuxtConfig} from 'nuxt';

export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public: { testVar: '' }
      }
})
