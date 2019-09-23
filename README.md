# README

## Install Quasar in Rails
1. `yarn add @babel/core @quasar/babel-preset-app @quasar/extras babel-loader "babel-plugin-transform-imports@^1.5.1" quasar stylus stylus-loader`
2. Add babel loader in config/webpack/loaders/babel-loader-quasar.js:
```
const path = require('path')

module.exports = {
  test: /\.js$/,
  loader: 'babel-loader',
  include: [path.join(__dirname, '../../..', 'node_modules/quasar')]
}
```
and require this file in config/webpack/environments.js
```
...
const babelLoaderQuasar = require('./loaders/babel-loader-quasar')
environment.loaders.append('js', babelLoaderQuasar)
...
```
3. Add stylus-loader in config/webpack/loaders/stylus.js:
```
module.exports = {
  test: /\.styl(us)?$/,
  loader: 'style-loader!css-loader!stylus-loader'
}
```
and require this file in config/webpack/environments.js
```
const stylus = require('./loaders/stylus')
environment.loaders.append('stylus', stylus)
```
4. Import quasar styles:
- Create javascript/app/assets/styles/quasar.variables.styl
```
// It's highly recommended to change the default colors
// to match your app's branding.

$primary   = #027BE3
$secondary = #26A69A
$accent    = #9C27B0

$positive  = #21BA45
$negative  = #C10015
$info      = #31CCEC
$warning   = #F2C037

@import '~quasar/src/css/variables.styl'
```
- Create javascript/app/assets/styles/quasar.styl
```
@import './quasar.variables'
@import '~quasar/dist/quasar.styl'
```
5. Add babel-transform-plugin and babel-transform-class-properties in babel.config.js:
``` 
plugins: [
      [
        ...
      ], 
      ["transform-imports",
        {
          "quasar": {
            "transform": "quasar/dist/babel-transforms/imports.js",
            "preventFullImport": true
          }
        }
      ]
    ]
```
6. Install quasar plugin in applications.js:
```
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

import '../app/assets/styles/quasar.styl'
import 'quasar/dist/quasar.ie.polyfills'

import {
   Quasar,
   QLayout,
   QHeader,
   QDrawer,
   QPageContainer,
   QPage
 } from 'quasar'
 
 Vue.use(Quasar, {
   config: {},
   components: {
     QLayout,
     QHeader,
     QDrawer,
     QPageContainer,
     QPage
   },
   directives: {
   },
   iconSet: iconSet,
   plugins: {
   }
 })
```
## Rails + Quasar FAQ
1. Q: TypeError: document.body is null
A: Move javascript_pack_tag and stylesheet_pack_tag below body html tag in layout, like this:
```
<!DOCTYPE html>
<html>
  <head>
    <title>VueJS</title>
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>
  </head>

  <body>
    <%= yield %>
    
    <%= javascript_pack_tag 'application' %>
    <%= stylesheet_pack_tag 'application' %>
  </body>
</html>
```
2. Q: I have error:
```
Error: Unknown import from Quasar: function Vue(options) {
  if ( true && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }

  this._init(options);
}
```
A: There are several reasons. Firstly check babel-plugin-transform-imports version, it's an be ^1.5.1 (not 2).
Otherwise, write me an e-mail `mr-koww@yandex.ru`
