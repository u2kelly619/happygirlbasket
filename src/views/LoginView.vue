<template>

  <h1 class="text-center my-5">登入/註冊</h1>
  <div class="form-login container-fluid py-5">
    <div class="row justify-content-center">
      <div class="col-8 col-md-4">
        <main class="form-signin">
          <form>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
              <label for="floatingInput">信箱</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
              <label for="floatingPassword">密碼</label>
            </div>
        
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">登入</button>
          </form>
        </main>
      </div>
    </div>
  </div>

</template>

<script>
$(document).ready(function(){
    const $navbar = $('#navbar');
   
    $(document).on('scroll',function(){
            $navbar.offset().top > 80 ? 
                $navbar.addClass('shadow') : $navbar.removeClass('shadow');
        })
  });

</script>