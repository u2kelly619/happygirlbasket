<template>

  <h1 class="text-center my-5">註冊</h1>
  <div class="form-login container-fluid py-5">
    <div class="row justify-content-center">
      <div class="col-8 col-md-4">
          <form>
            <div class="form-floating mb-3">
              <input type="text" class="form-control mb-1" id="displayName" placeholder="請輸入姓名" name="displayName" v-model="displayName">
              <label for="displayName" class="form-label">姓名</label>
            </div>
            <div class="form-floating mb-3">
              <input type="email" class="form-control mb-1" id="email"  name="email" placeholder="name@example.com" v-model="email">
              <label for="email" class="form-label">信箱</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control mb-1" id="password" name="password" minlength="8"  maxlength="20" placeholder="Password" v-model="password">
              <label for="password" class="form-label">密碼</label>
            </div>
            <div  v-if="errors.length" class="alert alert-danger" role="alert">
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
            </div>
            <input class="w-100 btn btn-lg btn-primary"  value="送出" @click="postSignup">
          </form>
      </div>
    </div>
  </div>



</template>

<script>
export default {
    data() {
        return {
            displayName: '',
            email: '',
            password: '',
            errors: []
        }
    },
    methods: {
        checkForm: function (e) {
          this.errors = [];

          if (!this.displayName) {
            this.errors.push('請輸入姓名');
          }

          if (!this.email) {
            this.errors.push('請輸入Email');
          } else if (!this.validEmail(this.email)) {
            this.errors.push('請輸入有效Email');
          }

          if (!this.password) {
            this.errors.push("請輸入密碼");
          } else if (this.password.length<8 || this.password.length>20){
            this.errors.push("請輸入8-20位密碼");
          }

          if (!this.errors.length) {
            return true;
          }

          e.preventDefault();
        },

        validEmail: function (email) {
          var emailRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return emailRule.test(email);
        },

        postSignup() {
            // console.log(this.axios)
            const submitForm = {
                displayName: this.displayName,
                email: this.email,
                password: this.password
            }
            this.axios.post('/signup', submitForm)
            .then((res) => {
              console.log(res.data)
              this.$router.push('/')
            })
            .catch((err)=>{
              console.log(err);
            })
        },
    }
}



//bootstrap表單驗證
// Example starter JavaScript for disabling form submissions if there are invalid fields
      // (function () {
      //   'use strict'

      //   // Fetch all the forms we want to apply custom Bootstrap validation styles to
      //   var forms = document.querySelectorAll('.needs-validation')
      //   console.log(forms);

      //   // Loop over them and prevent submission
      //   Array.prototype.slice.call(forms)
      //     .forEach(function (form) {
      //       form.addEventListener('submit', function (event) {
      //         if (!form.checkValidity()) {
      //           event.preventDefault()
      //           event.stopPropagation()
      //         }

      //         form.classList.add('was-validated')
      //       }, false)
      //     })
      // })()
</script>