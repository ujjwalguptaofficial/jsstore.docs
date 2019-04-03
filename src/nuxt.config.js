const parseArgs = require("minimist")
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
})

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  "3000"
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  "localhost"
module.exports = {
  srcDir: 'code/',
  env: {
    baseUrl: process.env.BASE_URL ||
      `http://${host}:${port}`
  },
  generate: {
    dir: '../build'
  },
  head: {
    title: "JsStore - Think in SQL and do in JS",
    meta: [{
        name: "theme-color",
        content: "#42a5f5"
      }, {
        name: "keywords",
        content: "jsstore, indexeddb, sql, like, wrapper, library"
      },
      {
        name: "description",
        content: "JsStore is an IndexedDB Wrapper. It makes IndexedDB super easy with its SQL like apis."
      }, {
        name: "robots",
        content: "index, follow"
      }, {
        name: "author",
        content: "Ujjwal Gupta"
      }, {
        name: "Rating",
        content: "General"
      }, {
        name: "Revisit-After",
        content: "1 days"
      }, {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, {
        property: "og:title",
        content: "JsStore - Think in SQL and do in JS"
      }, {
        property: "og:type",
        content: "IndexedDB wrapper"
      }, {
        property: "og:url",
        content: "http://jsstore.net/"
      }, {
        property: "og:site_name",
        content: "JsStore"
      }, {
        property: "og:description",
        content: "JsStore is an IndexedDB Wrapper. It makes IndexedDB super easy with its SQL like apis."
      }, {
        property: "og:image",
        content: "/img/JsStore_1200_630.png"
      }, {
        name: "twitter:creator",
        content: "@ujjwal_kr_gupta"
      }, {
        name: "twitter:title",
        content: "JsStore - Think in SQL and do in JS"
      }, {
        name: "twitter:description",
        content: "JsStore is an IndexedDB Wrapper. It makes IndexedDB super easy with its SQL like apis."
      }, {
        name: "twitter:image",
        content: "http://jsstore.net/img/JsStore_1200_630.png"
      }
    ],
    link: [{
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    }, {
      rel: "manifest",
      href: "/manifest.json"
    }, {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#5bbad5"
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#3B8070"
  },
  /*
   ** Build configuration
   */
  plugins: ['~plugins/vuetify.js'],
  css: [{
    src: ('~/styles/app.styl'),
    lang: 'styl'
  }, {
    src: ('~/styles/common.css'),
    lang: 'css'
  }],
  build: {
    vendor: ['vuetify']
  },
  modules: [
    "@nuxtjs/axios",
    "~/modules/typescript.js",
    ['@nuxtjs/google-analytics', {
      id: process.env.GA_ID || 'UA-131290933-2'
    }]
  ],
  axios: {}
}