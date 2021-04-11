export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'eshop',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/api.plugins.js",
    "~/plugins/jwt.plugins.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
  serverMiddleware:['~/api/stripe-payment.js','~/api/sendinblue.js'],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint:'https://fidelitycards.herokuapp.com/graphql',
      }
    }
  },
  build: {
    extend(config, {}) {
        config.node = {
            fs: 'empty'
        }
    }
  },
  env:{
    API_URL: process.env.API_URL,
    SENDING_BLUE_API_KEY:process.env.SENDING_BLUE_API_KEY,
    STRIPE_PK:process.env.STRIPE_PK,
    STRIPE_PUBLIC:process.env.STRIPE_PUBLIC,
  }
}
