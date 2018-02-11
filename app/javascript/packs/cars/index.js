import Vue from 'vue/dist/vue.esm';
import axios from 'axios';

var app = new Vue({
  el: '#car_index',
  data: {
    cars: [],
    newCar: ''
  },
  created: function () {
    this.fetchCars();
  },
  methods: {
    fetchCars: function () {
      axios.get(`../api/cars`)
        .then(res => {
          // for (var i = 0; i < response.data.cars.length; i++) {
          //   app.tasks.push(response.data.tasks[i]);
          // }
          this.cars = res.data.cars;
          console.log(this.cars)
        });
    }
  },
});