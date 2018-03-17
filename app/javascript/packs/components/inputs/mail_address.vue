<template>
  <div>
    <p>メールアドレス</p>
    <input type="email" v-model="mail_address" :class="inputError" @keyup="inputValidate" >
  </div>
</template>

<script>
  let emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  export default {
    data() {
      return {
        mail_address: '',
        is_validate: false
      }
    },
    methods: {
      inputValidate: function(){
        this.is_validate = emailRE.test(this.mail_address)
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
