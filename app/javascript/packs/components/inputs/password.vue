<template>
  <div>
    <p>パスワード</p>
    <input type="password" v-model="password" :class="inputError" @keyup="inputValidate">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        password: '',
        is_validate: false
      }
    },
    methods: {
      inputValidate: function(){
        if (this.password && this.password.length > 5) {
          this.is_validate = true
        } else {
          this.is_validate = false
        }
        this.$emit('input-change', this.is_validate)
      }
    },
    computed: {
      inputError: function(){
        return {
          'has-error': !this.is_validate
        }
      }
    }
  }
</script>