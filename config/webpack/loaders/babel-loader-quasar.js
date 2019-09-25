const path = require('path')

module.exports = {
  test: /\.js$/,
  loader: 'babel-loader',
  include: [path.join(__dirname, '../../..', 'node_modules/quasar')]
}
