import '../assets/styles/quasar.styl'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

import Vue from 'vue'

import {
  Quasar,
  QBtn,
  QIcon
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QBtn,
    QIcon
  },
  iconSet: iconSet
})
