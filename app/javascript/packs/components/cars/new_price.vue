<template>
  <div class="form2">
    <p>価格: {{ price }}</p>
    <input v-model="price">
    <input type="button" value="確認" v-on:click="buttonClick()">
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        price: "",
      }
    },
    methods: {
      buttonClick: function() {
        console.log("button click");
        console.log("new price is " + this.price);
        this.$store.commit('setPrice', this.price);
        this.$router.push('/cars/confirm');
      }
    },
  }
</script>