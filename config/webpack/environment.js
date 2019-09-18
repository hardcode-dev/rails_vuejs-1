const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')

// loaders
const vue = require('./loaders/vue')
const pugLoader = require('./loaders/pug')
const stylus = require('./loaders/stylus')
const babelLoaderQuasar = require('./loaders/babel-loader-quasar')

// utils
const aliases = require('./utils/aliases')

environment.loaders.append('stylus', stylus)
environment.loaders.append('js', babelLoaderQuasar)
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.loaders.prepend('pug', pugLoader)

environment.config.merge(aliases)

module.exports = environment
