import Vue from 'vue/dist/vue.esm'

document.addEventListener('DOMContentLoaded', () => {
  let myComponentName = {
    template: '<p>{{message}}</p>',
    data() {
      return {
        message: 'Hello VueJS'
      }
    }
  }

  new Vue({
    el: '#app',
    components: {
      'my-component-name': myComponentName
    }
  })
})
