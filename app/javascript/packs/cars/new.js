import Vue from 'vue/dist/vue.esm';
import router from '../router/router'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    maker: '',
    model: '',
    price: '',
  },
  mutations: {
    setMaker(state, car){
      state.maker = car.maker;
      state.model = car.model;
    },
    setPrice(state, price) {
      state.price = price;
    },
  },
  getters: {
    maker(state) { return state.maker },
    model(state) { return state.model },
    price(state) { return state.pirce },
  }
})

const new_root = new Vue({
  router,
  store,
}).$mount('#car_form');