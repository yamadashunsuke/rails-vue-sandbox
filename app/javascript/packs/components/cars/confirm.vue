<template>
  <div class="form3">
    <p>メーカー: {{ this.$store.state.maker }}</p>
    <p>車種: {{ this.$store.state.model }}</p>
    <p>価格: {{ this.$store.state.price }}</p>
    <input type="button" value="登録" v-on:click="buttonClick()">
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    methods: {
      buttonClick: function() {
        console.log("button click");
        axios.post(`../api/cars`)
          .then(res => {
            this.makers = res.data.makers;
            console.log(this.makers)
          });
      }
    },
  }
</script>