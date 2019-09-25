import Vue from 'vue'
import App from '../app'

import '../app/quasar'
import '../app/backend'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    render: h => h(App)
  })
})
