const path = require('path')

module.exports = {
  resolve: {
    alias: {
      'images': path.join(__dirname, '../../../app/javascript/app/assets/images'),
      '@images': path.join(__dirname, '../../../app/javascript/app/assets/images')
    }
  }
}
