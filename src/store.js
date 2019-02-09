import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async sendContactUsForm (ctx, contactUsFormData) {
      try {
        await axios.post('http://httpbin.org/post', contactUsFormData)
      } catch (error) {
        throw error
      }
    }
  }
})
