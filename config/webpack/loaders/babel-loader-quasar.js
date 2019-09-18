const path = require('path')

// console.info(path.join(__dirname, '../../..', 'node_modules/quasar'))

module.exports = {
  test: /\.js$/,
  loader: 'babel-loader',
  include: [path.join(__dirname, '../../..', 'node_modules/quasar')]
}
