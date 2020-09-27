/* eslint-disable nuxt/no-cjs-in-config */
require('dotenv').config()
const { meta, splashScreens } = require('./nuxt-attrs')

export default {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  mode: 'universal',
  target: 'server',
  head: {
    title: 'Call me 6ones - A Scientist & Engineer',
    meta: [...meta],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap',
      },
      ...splashScreens,
    ],
    // script: [
    //   {
    //     src: 'https://platform.twitter.com/widgets.js',
    //     charset: 'utf-8',
    //     async: true,
    //   },
    // ],
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
      name: 'Chidindu Ogbonna',
      short_name: 'Chidindu Ogbonna',
      theme_color: '#0ef',
      background_color: '#000',
      start_url: `/?standalone=true`,
    },
    icon: {
      // XXX: Remember to burst the pwa cache to update icons
      // rm -rf node_modules/.cache/pwa/icon
      source: '/icon.png',
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
