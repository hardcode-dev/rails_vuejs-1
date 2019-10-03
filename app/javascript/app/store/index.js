import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filter: ''
  },
  mutations: {
    updateFilter(state, value) {
      state.filter = value
    }
  },
  actions: {},
  modules: {},
  plugins: [
    VuexPersistedState()
  ]
})
