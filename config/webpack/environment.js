const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  plugins: [
    new VuetifyLoaderPlugin()
  ],
}

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.plugins.prepend('VuetifyLoaderPlugin', new VuetifyLoaderPlugin());
environment.loaders.prepend('vue', vue)
var sassLoader = environment.loaders.get('sass')
sassLoader.use = [
    'vue-style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      // Requires sass-loader@^8.0.0
      options: {
        implementation: require('sass'),
        sassOptions: {
          fiber: require('fibers'),
          indentedSyntax: true // optional,
        },
        prependData: "@import 'src/scss/variables.scss'"
      },
    },
  ]

module.exports = environment
