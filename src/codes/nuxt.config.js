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
  head: {
    title: "JsStore - Think in SQL and do in JS",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "JsStore is an IndexedDB Wrapper. It makes IndexedDB super easy with its SQL like apis."
      }
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
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
    "~/modules/typescript.js"
  ],
  axios: {}
}