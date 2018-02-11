import VueRouter from 'vue-router'
import Vue from 'vue/dist/vue.esm';
import NewCar from '../components/cars/new_car.vue'
import NewPrice from '../components/cars/new_price.vue'
import Confirm from '../components/cars/confirm.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/cars/new', component: NewCar, props: true },
    { path: '/cars/new_price', component: NewPrice, props: true },
    { path: '/cars/confirm', component: Confirm, props: true },
  ],
})