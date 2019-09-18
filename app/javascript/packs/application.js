import Vue from 'vue'
import App from '../app'
import '../app/quasar'

import { backend } from 'app/backend'

Vue.prototype.$backend = backend

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    render: h => h(App)
  })
})
