<template>
  <div class="form1">
    <input v-model="tel">
    <input type="button" value="SMS送信" @click="sendSms()">
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        tel: '',
      }
    },
    methods: {
      sendSms() {
        let post_params = {
          tel: this.tel,
        }
        let headers = {
          headers: {
            'X_CSRF_Token': this.getCsrfToken()
          }
        }
        axios.post(`../sign_up/tel`, post_params, headers)
          .then(res => {
            console.log(res.data);
            if (res.data.message == "OK") {
              console.log("OK!!!");
            }
          });
      },
      getCsrfToken() {
        let elm_1 = document.getElementById('csrf_token').value;
        return elm_1;
      },
    }
  }
</script>