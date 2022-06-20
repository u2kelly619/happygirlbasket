<template>

  <h1 class="text-center my-5">註冊</h1>
  <div class="form-login container-fluid py-5">
    <div class="row justify-content-center">
      <div class="col-8 col-md-4">
          <form>
            <div class="form-floating mb-3">
              <input type="text" class="form-control mb-1" id="displayName" placeholder="請輸入姓名" name="displayName" v-model="displayName" :class="{ 'is-invalid': displayNameError }">
              <label for="displayName" class="form-label">姓名</label>
              <div class="invalid-feedback">
                {{ displayNameErrMsg }}
              </div>
            </div>
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
            <div  v-if="userExistMsg" class="alert alert-danger" role="alert">
              <span>{{userExistMsg}}</span>
            </div>
            <div  v-if="userCreateSuccessMsg" class="alert alert-success" role="alert">
              <span>{{userCreateSuccessMsg}}</span>
            </div>
            <button class="w-100 btn btn-lg btn-primary" @click.prevent="postSignup">送出</button>
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
            userExistMsg: '',
            userCreateSuccessMsg: '',
            displayNameError: false,
            displayNameErrMsg: '',
            emailError: false,
            emailErrMsg: "",
            passwordError: false,
            passwordErrMsg: "",
        }
    },
    watch: {
      displayName: function(){
        if(this.displayName.length==0) {
          this.displayNameError = true;
          this.displayNameErrMsg = "請輸入姓名"
        }
      },
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
  
    methods: {
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
                  },1500)
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