import Vue from 'vue/dist/vue.esm';
import router from '../router/router'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    maker: '',
    maker_id: null,
    model: '',
    model_id: null,
    price: '',
  },
  mutations: {
    setMaker(state, car){
      state.maker = car.maker.name;
      state.maker_id = car.maker.id;
      state.model = car.model.name;
      state.model_id = car.model.id;
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