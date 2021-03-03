export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'instagram-Ra',
    htmlAttrs: {
      lang: 'tr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" },
      { rel: "stylesheet", href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css" }
    ],
  },
  loading: {
  
    failedColor: "#e74c3c",
    height: "5px",
    continuous: true
  },
  css: [
    '~/assets/style/reset.css',
    '~/assets/style/baskan.scss',
    '~/assets/style/groupStyles.scss',
  ],
  plugins: [
    "~/plugins/modal.js",
    "~/plugins/toggleButton.js",
    '~/plugins/axios.js',
    '~/plugins/timeago.js',
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  build: {
  },
  axios: {
    baseURL: 'http://localhost:3000',
    credentials: true
  },
  server: {
    host: "0.0.0.0",
    port: 8080
  },
  router: {
    middleware: ['auth']
  }
}
