import Vue from 'vue'

import './quasar.styl'
import iconSet from 'quasar/icon-set/fontawesome-v5.js'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

import {
  Quasar,
  QAvatar,
  QBtn,
  QBtnDropdown,
  QBtnGroup,
  QCard,
  QCardSection,
  QDialog,
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
  QSpinnerBars,
  QSeparator,
  QTable,
  QTd,
  QTh,
  QTr,
  QToolbar,
  QToolbarTitle,
  ClosePopup,
  Notify,
  Ripple
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QAvatar,
    QBtn,
    QBtnDropdown,
    QBtnGroup,
    QCard,
    QCardSection,
    QDialog,
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
    QSpinnerBars,
    QSeparator,
    QTable,
    QTd,
    QTh,
    QTr,
    QToolbar,
    QToolbarTitle
  },
  iconSet: iconSet,
  directives: {
    ClosePopup,
    Ripple
  },
  plugins: {
    Notify
  },
})
