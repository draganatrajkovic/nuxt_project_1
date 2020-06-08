
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      //font-family: 'Lato', sans-serif;
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'},
      
      // font-family: "Circular Std Medium"
      { rel: 'stylesheet', href: '//db.onlinewebfonts.com/c/9475d6a0b79c164f9f605673714e75d9?family=Circular+Std+Medium'},

      //font-family: "Geogrotesque";
      // { rel: 'stylesheet', href="//db.onlinewebfonts.com/c/6966cc177fccc04acf8c9e8b04a81fe7?family=Geogrotesque"},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
 css: ['~/assets/scss/main.scss'],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios' //global axios
  ],
  //global axios
  axios: {
    BaseURL: 'https://api.jsonbin.io/b/'
  },
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
    linkActiveClass: 'custom-active-link',
    linkExactActiveClass: 'custom-exact-active-link',
  }
}
