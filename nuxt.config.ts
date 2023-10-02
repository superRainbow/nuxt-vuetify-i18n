export default defineNuxtConfig({
  modules: ['@nuxt/devtools', '@nuxtjs/eslint-module', '@nuxtjs/i18n', '@vueuse/nuxt'],
  css: ['vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    strategy: 'prefix',
    defaultLocale: 'tw',
    locales: [
      { code: 'en', iso: 'en-US' },
      { code: 'tw', iso: 'zh-TW' },
    ],
    detectBrowserLanguage: {
      alwaysRedirect: true,
    },
    skipSettingLocaleOnNavigate: true,
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  typescript: {
    typeCheck: true,
  },
  devtools: {
    enabled: true,
    vscode: {
      enabled: true,
    },
  },
});
