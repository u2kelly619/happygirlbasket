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
            <div  v-if="userExistMsg" class="alert alert-danger" role="alert">
              <p>{{userExistMsg}}</p>
            </div>
            <div  v-if="userCreateSuccessMsg" class="alert alert-success" role="alert">
              <p>{{userCreateSuccessMsg}}</p>
            </div>
            <input class="w-100 btn btn-lg btn-primary" value="送出" @click="postSignup">
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
            errors: [],
            userExistMsg: '',
            userCreateSuccessMsg: ''
        }
    },
    // mounted() {
    //   let vm = this
    //   this.$watch(vm => [vm.displayName, vm.email, vm.password], val => {
    //     this.errors = [];
    //     if (!vm.displayName) {
    //       this.errors.push('請輸入姓名');
    //     }

    //     if (!vm.email) {
    //       this.errors.push('請輸入Email');
    //     } else if (!this.validEmail(vm.email)) {
    //       this.errors.push('請輸入有效Email');
    //     }

    //     if (!vm.password) {
    //       this.errors.push("請輸入密碼");
    //     } else if (vm.password.length<8 || vm.password.length>20){
    //       this.errors.push("請輸入8-20位密碼");
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
              let status = res.data.hasUser
              switch (status){
                case 1 :
                  this.userCreateSuccessMsg = ''
                  this.userExistMsg = '此帳號已存在！請登入或使用其他 Email'
                  break;
                case 0 :
                  this.userExistMsg = ''
                  this.userCreateSuccessMsg = '註冊成功！'
                  let navigate = this.$router
                  setTimeout(function(){
                      navigate.push('/login');
                  },2000)
                  break;
              }
            })
            .catch((err)=>{
              console.log(err);
            })
        },
    }
}



</script>