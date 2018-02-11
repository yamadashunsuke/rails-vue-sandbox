<template>
  <div class="form1">
    <p>メーカー: {{ selected }} </p>
    <select v-model="selected" class="CarModelSelectList" @change="fetchModels" >
      <option v-for="maker in makers" v-bind:value="maker.id">
          {{ maker.name }}
      </option>
    </select>
    <p>車種: {{ car.model }}</p>
    <select v-model="car.model" class="CarModelSelectList" >
      <option v-for="model in models" v-bind:value="model.id">
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
          maker: "",
          model: "",
        },
        selected: null,
        makers: [],
        models: [],
      }
    },
    mounted: function () {
      this.fetchMakers();
    },
    methods: {
      buttonClick: function() {
        console.log("button click");
        this.car.maker = this.selected
        console.log("new car is " + this.car.maker + "," + this.car.model);
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
        axios.get(`../api/car_models/${this.selected}`)
          .then(res => {
            this.models = res.data.car_models;
            console.log(this.models)
          });
      },
    },      
  }
</script>

<style lang="scss" scoped>
  .CarModelSelectList {
    display: block;
    width: 200px;
  }
</style>