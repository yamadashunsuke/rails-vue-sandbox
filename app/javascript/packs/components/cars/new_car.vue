<template>
  <div class="form1">
    <p>メーカー: {{ car.maker.name }} </p>
    <select v-model="car.maker" class="CarModelSelectList" @change="fetchModels" >
      <option v-for="maker in makers" v-bind:value="maker">
          {{ maker.name }}
      </option>
    </select>
    <p>車種: {{ car.model ? car.model.name : "" }}</p>
    <select v-model="car.model" class="CarModelSelectList" >
      <option v-for="model in models" v-bind:value="model">
          {{ model.name }}
      </option>
    </select>
    <input type="button" value="次へ" v-on:click="buttonClick()">
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data: function () {
      return {
        car: {
          maker: { name: "", id: null },
          model: { name: "", id: null },
        },
        makers: [],
        models: [],
      }
    },
    mounted: function () {
      this.fetchMakers();
      this.car.maker = this.$store.getters.maker_obj;
      this.car.model = this.$store.getters.car_obj;
    },
    methods: {
      buttonClick: function() {
        this.$store.commit('setMaker', this.car);
        this.$router.push('/cars/new_price');
      },
      fetchMakers: function () {
        axios.get(`../api/makers`)
          .then(res => {
            this.makers = res.data.makers;
            console.log(this.makers)
          });
      },
      fetchModels: function () {
        axios.get(`../api/car_models/${this.car.maker.id}`)
          .then(res => {
            this.models = res.data.car_models;
            console.log(this.models)
          });
      },
    },      
  }
</script>
