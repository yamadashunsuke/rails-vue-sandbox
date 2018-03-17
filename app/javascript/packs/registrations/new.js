import Vue from 'vue/dist/vue.esm';
import router from '../router/registrations'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
})

const sing_up_root = new Vue({
  router,
  store,
}).$mount('#sign_up_form');