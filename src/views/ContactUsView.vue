<template>
  <h1 class="text-center my-5">聯絡我們</h1>
  <p class="text-center">如果有任何問題，歡迎與我聯繫！</p>
  <div class="container-fluid">
      <div class="row justify-content-center">
          <div class="text-center col-1">
              <a class="contact-icon" href="mailto: u2kelly619@gmail.com"><i class="fa-solid fa-envelope"></i></a>
          </div>
          <div class="text-center col-1">
              <a class="contact-icon" href="https://www.facebook.com/kelly.chang.718/"><i class="fa-brands fa-facebook-square"></i></a>
          </div>
          <div class="text-center col-1">
              <a class="contact-icon" href="https://www.instagram.com/u2kelly619/"><i class="fa-brands fa-instagram"></i></a>
          </div>
      </div>
  </div>

  <!-- FORM -->
  <div class="container-fluid my-5">
      <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-4">
              <form action="">
                  <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">姓名</label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" required>
                  </div>
                  <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">信箱</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required>
                  </div>
                  <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">留言</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                  <button class="w-100 btn btn-primary">送出</button>
              </form>
          </div>
      </div>
      
  </div>

  <div class="container-fluid" style="height:500px"></div>
</template>
