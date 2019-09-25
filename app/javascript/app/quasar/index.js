import Vue from 'vue'

import './quasar.styl'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

import {
  Quasar,
  QAvatar,
  QBtn,
  QDrawer,
  QIcon,
  QInput,
  QItem,
  QItemLabel,
  QItemSection,
  QHeader,
  QLayout,
  QList,
  QPage,
  QPageContainer,
  QScrollArea,
  QSpace,
  QSpinner,
  QSeparator,
  QToolbar,
  QToolbarTitle,
  Ripple
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QAvatar,
    QBtn,
    QDrawer,
    QIcon,
    QInput,
    QItem,
    QItemLabel,
    QItemSection,
    QHeader,
    QLayout,
    QList,
    QPage,
    QPageContainer,
    QScrollArea,
    QSpace,
    QSpinner,
    QSeparator,
    QToolbar,
    QToolbarTitle
  },
  iconSet: iconSet,
  directives: {
    Ripple
  },
})
