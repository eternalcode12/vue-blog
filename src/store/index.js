import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import about from './modules/about'
import service from './modules/service'
import contact from './modules/contact'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    namespaced: true,
    home,
    about,
    service,
    contact
  }
})
