import Vue from 'vue'

import ActionCable from 'actioncable'
const cable = ActionCable.createConsumer()

import VueActionCable from './vue-action-cable'
Vue.use(VueActionCable, cable)