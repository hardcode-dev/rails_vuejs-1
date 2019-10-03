import Vue from 'vue'
import App from '../app'

import '../app/quasar'
import '../app/backend'
import router from '../app/router'
import '../app/mixins'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    render: h => h(App),
    router
  })
})
