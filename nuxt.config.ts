// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    'shadcn-nuxt',
    '@nuxt/image',
    '@nuxtjs/seo',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
  ],
  fonts: {
    families: [
      {
        name: 'Roboto',
        provider: 'google',
        weights: [400, 500, 600, 700, 800],
      },
    ],
  },
  shadcn: {
    prefix: 'ui',
    componentDir: './components/ui',
  },
  image: {
    format: ['webp'],
    quality: 80,
  },
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },
  ssr: true,
  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },
})
