import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

const api_url = 'http://localhost:8081'

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    addProducts(state, data) {
      state.products = data
    },
    addProduct(state, data) {
      Axios.post(`${api_url}/api/products/insert`, data).then(res => {
        state.products.push(res.data)
      })
    }
  },
  actions: {
    SET_FIRST_PRODUCTS({ commit }) {
      Axios.get(`${api_url}/api/products/all`).then(res => {
        let data = res.data

        commit('addProducts', data)
      })
    }
  }
})
