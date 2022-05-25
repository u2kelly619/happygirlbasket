<template>

  <h1 class="text-center my-5">登入/註冊</h1>
  <div class="form-login container-fluid py-5">
    <div class="row justify-content-center">
      <div class="col-8 col-md-4">
          <form class="needs-validation" novalidate>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="email"  name="email" placeholder="name@example.com" v-model="email" required>
              <label for="email" class="form-label">信箱</label>
              <div class="invalid-feedback">
                  請輸入合法的電子郵件地址。
              </div>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="password" name="password" minlength="8"  maxlength="12" placeholder="Password" v-model="password" required>
              <label for="password" class="form-label">密碼</label>
              <div class="invalid-feedback">
                    請輸入 8 ~ 12 位數的密碼。
              </div>
            </div>
        
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" @click.prevent="doLogin">登入</button>
          </form>
      </div>
    </div>
  </div>

</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        doLogin() {
            console.log(this.axios)
            const submitForm = {
                email: this.email,
                password: this.password
            }
            this.axios.post('/login', submitForm).then((response) => {
                console.log(response)
                this.$router.push('/')
            })
        }
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