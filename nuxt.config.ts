// https://nuxt.com/docs/api/configuration/nuxt-config
import * as path from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module", "@nuxt/fonts"],
  tailwindcss: {
    config: {
      plugins: [require("tailwindcss-primeui")],
      content: ["./presets/**/*.{js,vue,ts}"],
    },
  },
  fonts: {
    families: [
      {
        name: "Roboto",
        provider: "google",
        weights: [400, 500, 600, 700, 800],
      },
    ],
  },
  primevue: {
    options: { unstyled: true },
    importPT: { from: path.resolve(__dirname, "./presets/brand/") },
  },
});
