<template>
  <div class="form1">
    <form @submit.prevent="onSubmit">
      <mail-address @input-change="mail_valid"></mail-address>
      <password @input-change="password_valid"></password>
      <input type="submit" value="次へ" :disabled="!isValidate" >
    </form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        valid: {
          mail_address: false,
          password: false
        }
      }
    },
    methods: {
      onSubmit(){
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
      },
      mail_valid(isValid) {
        this.valid.mail_address = isValid
      },
      password_valid(isValid) {
        this.valid.password = isValid
      },
    },
    computed: {
      isValidate: function() {
        return this.valid.mail_address && this.valid.password
      }
    }
  }

</script>