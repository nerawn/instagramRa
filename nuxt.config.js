export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'instagram-Ra',
    htmlAttrs: {
      lang: 'en'
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
      { rel:"stylesheet", href:"https://pro.fontawesome.com/releases/v5.10.0/css/all.css"}

    ],
   
  },

  loading: {
    color: "#badc58",
    failedColor: "#e74c3c",
    height: "3px",
    continuous: true
  },
  css: [
    '~/assets/reset.css',
    '~/assets/classes.scss'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
  ],

  build: {
  }
}
