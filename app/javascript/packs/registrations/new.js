import Vue from 'vue/dist/vue.esm';
import router from '../router/registrations'
import MailAddress from '../components/inputs/mail_address'
import Password from '../components/inputs/password'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
})

Vue.component('mail-address', MailAddress)
Vue.component('password', Password)

const sing_up_root = new Vue({
  router,
  store,
}).$mount('#sign_up_form');