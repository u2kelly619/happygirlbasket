<template>

  <h1 class="text-center my-5">登入</h1>
  <div class="form-login container-fluid py-5">
    <div class="row justify-content-center">
      <div class="col-8 col-md-4">
          <form>
            <div class="form-floating mb-3">
              <input type="email" class="form-control mb-1" id="email"  name="email" placeholder="name@example.com" v-model="email">
              <label for="email" class="form-label">信箱</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control mb-1" id="password" name="password" minlength="8"  maxlength="20" placeholder="Password" v-model="password">
              <label for="password" class="form-label">密碼</label>
            </div>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <div  v-if="errors.length" class="alert alert-danger" role="alert">
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
            </div>
            <div  v-if="noLoginMsg" class="alert alert-danger" role="alert">
              <p>{{noLoginMsg}}</p>
            </div>
            <input class="w-100 btn btn-lg btn-primary" value="登入" @click="postLogin">
          </form>
      </div>
    </div>
  </div>



</template>

<script>
export default {
    inject: ['reload'],
    data() {
        return {
            email: '',
            password: '',
            errors: [],
            noLoginMsg: '',
        }
    },
    
    // mounted() {
    //   let vm = this
    //   this.$watch(vm => [vm.email, vm.password], val => {
    //     this.errors = [];
    //     if (!vm.email) {
    //       this.errors.push('請輸入Email');
    //     } else if (!this.validEmail(vm.email)) {
    //       this.errors.push('請輸入有效Email');
    //     }

    //     if (!vm.password) {
    //       this.errors.push("請輸入密碼");
    //     }
    //   }, {
    //     // immediate: true, // run immediately
    //     deep: true // detects changes inside objects. not needed here, but maybe in other cases
    //   }) 
    // },


    methods: {
        validEmail: function (email) {
          var emailRule = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return emailRule.test(email);
        },

        postLogin() {
            const submitForm = {
                email: this.email,
                password: this.password
            }
            // console.log(submitForm)
            this.axios.post('/login', submitForm)
                .then((res) => {
                  console.log(res.data)
                  let status = res.data.loginSuccess
                  switch (status){
                    case 0, 2 :
                      this.noLoginMsg = '找不到此 user 或密碼錯誤'
                      break;
                    case 1 :
                      this.reload()
                      this.$router.push('/')
                      this.$store.commit({
                        type: 'updateLoginStatus',
                        loginStatus: 1
                      })
                      break;
                  }
                  
                })
                .catch((err)=>{
                  console.log(err);
                })
                }
        },
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