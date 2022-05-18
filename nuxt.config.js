export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tonote-Website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/globalcss.css',
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vee-validate.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  tailwindcss: {
    exposeConfig: true,
    config: {
      mode: 'jit',
      purge: {
        content: [
          'components/**/*.{vue,js}',
          'layouts/**/*.vue',
          'pages/**/*.vue',
          'plugins/**/*.{js,ts}',
          'nuxt.config.{js,ts}'
        ]
      },
      theme: {
        extend: {
          colors: {
            'primary-color': '#003BB3',
            'content-color': '#626262',
            'header-color': '#03060B',
            success: '#2FA36B'
          },
          boxShadow: {
            plan: '0px 10px 35px rgba(0, 0, 0, 0.03)'
          },
          fontFamily: {
            NeueHelvetica: 'NeueHelvetica'
          }
        }
      }
    }
  },

  storybook: {
    // Options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules']
  },
  axios: {
    baseURL: '' // Used as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    appURL: process.env.APP_URL,
    axios: {
      baseURL: process.env.API_URL
    }
  },
  privateRuntimeConfig: {
    appURL: process.env.APP_URL,
    axios: {
      baseURL: process.env.API_URL
    }
  },
  env: {
    appURL: process.env.APP_URL,
    apiURL: process.env.API_URL
  }
}
