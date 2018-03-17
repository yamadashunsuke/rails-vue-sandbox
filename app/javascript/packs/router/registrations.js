import VueRouter from 'vue-router'
import Vue from 'vue/dist/vue.esm';
import SignUp from '../components/registrations/sign_up.vue'
import Tel from '../components/registrations/tel.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/sign_up', component: SignUp, props: true },
    { path: '/sign_up/tel', component: Tel, props: true },
  ],
})