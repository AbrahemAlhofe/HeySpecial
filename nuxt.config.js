export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'HeySpecial',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'HeySpecial هو موقع بيقدم مجموعة من الأدوات لمساعدة الأشخاص المصابين بإضطارب طيف التوحد من إختبارات و ألعاب . . . إلخ' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png" },
      { rel: "icon", sizes: "32x32", href: "/favicons/favicon-32x32.png", type: "image/png" },
      { rel: "icon", sizes: "16x16", href: "/favicons/favicon-16x16.png", type: "image/png" },
      { rel: "manifest", href: "/favicons/site.webmanifest" },
      { rel: "mask-icon", href: "/favicons/safari-pinned-tab.svg", color: "#5bbad5" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://www.npmjs.com/package/@nuxtjs/svg
    '@nuxtjs/svg'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
