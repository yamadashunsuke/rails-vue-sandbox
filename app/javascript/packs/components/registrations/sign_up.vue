<template>
  <div class="form1">
    <input type="email" v-model="mail_address">
    <p>パスワード</p>
    <input type="password" v-model="password">
    <input type="button" value="次へ" @click="signUp()">
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        mail_address: '',
        password: '',
      }
    },
    methods: {
      signUp(){
        let post_params = {
          mail_address: this.mail_address,
          password: this.password
        }
        let headers = {
          headers: {
            'X_CSRF_Token': this.getCsrfToken()
          }
        }
        axios.post(`../sign_up`, post_params, headers)
          .then(res => {
            console.log(res.data);
            if (res.data.message == "OK") {
              this.nextPage();
            }
          });
      },
      getCsrfToken() {
        let elm_1 = document.getElementById('csrf_token').value;
        return elm_1;
      },
      nextPage() {
        this.$router.push('/sign_up/tel');
      }
    }
  }

</script>