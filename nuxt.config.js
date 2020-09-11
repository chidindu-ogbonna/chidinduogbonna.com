/* eslint-disable nuxt/no-cjs-in-config */
require('dotenv').config()
const { meta, pwaIcons, splashScreens } = require('./nuxt-attrs')

export default {
  mode: 'universal',
  target: 'server',
  head: {
    title: 'Chidindu Promise Ogbonna | Data Scientist & Software Engineer',
    meta: [...meta],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap',
      },
      ...splashScreens,
    ],
  },

  css: [
    '@/assets/css/main.scss',
    '@/assets/css/typography.scss',
    '@/assets/css/transitions.scss',
  ],

  plugins: [
    { src: '@/plugins/vue-scrollto.js', mode: 'client' },
    // { src: '@/plugins/vuex-persist.js', mode: 'client' },
    '@/plugins/filters.js',
  ],

  components: true,

  loading: {
    color: '#0ef',
    height: '2px',
  },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    'vue-scrollto/nuxt',
    '@nuxtjs/dotenv',
  ],

  pwa: {
    manifest: {
      name: 'Chidindu Promise Ogbonna',
      short_name: 'Chidindu Ogbonna',
      theme_color: '#0ef',
      background_color: '#000',
      start_url: `/?standalone=true`,
      icons: [...pwaIcons],
    },
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-nord.css',
        // theme: 'prism-themes/themes/prism-dracula.css',
      },
    },
  },

  build: {},
}
