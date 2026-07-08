// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        }
      ],

      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4',
          type: 'module'
        }
      ]
    }
  }
})
