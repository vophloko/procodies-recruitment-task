import en_US from './i18n/locales/en-US'

export default defineI18nConfig(() => ({
  legacy: false,
  baseUrl: 'https://app.com', // to ENV
  numberFormats: {
    'en-US': {
      currency: {
        style: 'currency',
        currency: 'USD',
        notation: 'standard',
      },
    },
  },
  locale: 'en-US',
  locales: [
    {
      code: 'en',
      iso: 'en-US',
    },
  ],
  messages: {
    'en-US': en_US,
  },
}))
