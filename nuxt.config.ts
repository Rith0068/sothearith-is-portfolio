// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()]
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Koem SoTheaRith — Full Stack Developer',
      meta: [
        {
          name: 'description',
          content:
            'Portfolio of Koem SoTheaRith, a Full Stack Developer in Phnom Penh, Cambodia building fast, scalable, and user-friendly web applications with Nuxt.js, Vue.js, Laravel, PHP, and MySQL.'
        },
        { name: 'theme-color', content: '#000000' },
        { property: 'og:title', content: 'Koem SoTheaRith — Full Stack Developer' },
        {
          property: 'og:description',
          content:
            'Portfolio of Koem SoTheaRith, a Full Stack Developer in Phnom Penh, Cambodia building fast, scalable, and user-friendly web applications.'
        },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        }
      ]
    }
  }
})
