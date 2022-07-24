<template>

  <h1 class="text-center my-5">登入</h1>
  <div class="form-login container-fluid py-5">
    <div class="row justify-content-center">
      <div class="col-8 col-md-4">
          <form>
            <div class="form-floating mb-3">
              <input type="email" class="form-control mb-1" id="email"  name="email" placeholder="name@example.com" v-model="email" :class="{ 'is-invalid': emailError }">
              <label for="email" class="form-label">信箱</label>
              <div class="invalid-feedback">
                {{ emailErrMsg }}
              </div>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control mb-1" id="password" name="password" minlength="8"  maxlength="20" placeholder="Password" v-model="password" :class="{ 'is-invalid': passwordError }">
              <label for="password" class="form-label">密碼</label>
              <div class="invalid-feedback">
                {{ passwordErrMsg }}
              </div>
            </div>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <div  v-if="noLoginMsg" class="alert alert-danger" role="alert">
              <span>{{noLoginMsg}}</span>
            </div>
            <button class="w-100 btn btn-lg btn-primary" @click.prevent="postLogin">登入</button>
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
            emailError: false,
            emailErrMsg: "",
            passwordError: false,
            passwordErrMsg: "",
        }
    },
    watch: {
      email: function () {
        var isMail =
          /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        if (!isMail.test(this.email)) {
          this.emailError = true;
          this.emailErrMsg = "請輸入正確Email格式";
        } else {
          this.emailError = false;
        }
      },
      password: function () {
        if (this.password.length < 8) {
          this.passwordError = true;
          this.passwordErrMsg = "密碼需至少8個字元";
        } else {
          this.passwordError = false;
        }
      },
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
                  let vm = this
                  switch (status){
                    case 0, 2 :
                      vm.noLoginMsg = '找不到此 user 或密碼錯誤'
                      break;
                    case 1 :
                      // this.reload()
                      vm.$store.dispatch('getLoginStatus')
                      vm.$router.push('/')
                      break;
                  }
                  
                })
                .catch((err)=>{
                  console.log(err);
                })
                }
        },
    }

</script>