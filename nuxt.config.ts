// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // css: ['~/assets/css/input.css'],
  build: {
    transpile: ['@googlemaps/js-api-loader']
  },
  modules: [
    '@nuxtjs/tailwindcss',
    "@pinia/nuxt",
  ],
  postcss: {
    plugins: {
      "postcss-custom-properties": false,
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
