import Vue from 'vue/dist/vue.esm'

document.addEventListener('DOMContentLoaded', () => {
  Vue.component('my-component-name', {
    template: '<p>{{message}}</p>',
    data() {
      return {
        message: 'Hello VueJS'
      }
    }
  })

  new Vue({
    el: '#app'
  })
})
