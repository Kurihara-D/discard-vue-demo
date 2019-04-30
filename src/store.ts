import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
interface State {
  counter: number
  message: string
}

export default new Vuex.Store({
  state: {
    counter: 0,
    message: ''
  } as State,
  getters: {
    getCounter: (state, getters) => () => {
      return state.counter
    },
    getMessage: (state, getters) => () => {
      return state.message
    }
  },

  mutations: {
    increment (state, payload) {
      state.counter += 1
    },
    getMessage (state, payload) {
      state.message = payload.message
    }
  },
  actions: {
    incrementAction (context) {
      context.commit('increment')
    },
    async getMessageAction (context) {
      const payload = {
        message: ''
      }

      let config = {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key' : process.env.VUE_APP_API_KEY
        }
      }
      await axios.get(process.env.VUE_APP_API_URL_BASE, config)
      .then((res) => {
        payload.message = res.data
      })
      context.commit('getMessage', payload)
    }
  }
})
