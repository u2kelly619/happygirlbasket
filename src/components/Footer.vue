<template>
  <div class="container-fluid footer">
        <footer class="pt-5 px-5">
          <div class="row justify-content-between">
            <div class="col-12 col-md-6 row align-items-evenly mb-3 ps-4">
              <h5 class="p-0"><a class="px-0" href="./index.html">喜妹菜籃子</a></h5>
              <ul class="nav d-flex justify-content-between p-0">
                <li class="nav-item mb-2"><router-link to="/brand-story" class="nav-link p-0 text-muted">品牌故事</router-link></li>
                <li class="nav-item mb-2"><router-link to="/news" class="nav-link p-0 text-muted">最新消息</router-link></li>
                <li class="nav-item mb-2"><router-link to="/products" class="nav-link p-0 text-muted">產品</router-link></li>
                <li class="nav-item mb-2"><router-link to="/recipe" class="nav-link p-0 text-muted">食譜</router-link></li>
                <li class="nav-item mb-2"><router-link to="/contact-us" class="nav-link p-0 text-muted">聯絡我們</router-link></li>
              </ul>
            </div>
      
            <div class="col-12 col-md-4 offset-md-1">
              <form>
                <h5>訂閱電子報</h5>
                <p>搶先獲得最新優惠及消息！</p>
                <div class="d-flex w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                  <button class="btn subscribe-btn" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
      
          <div class="d-flex justify-content-between pt-4 mt-4 border-top">
            <p>© 2021 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3"><a class="link-light sns-icon" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
              <li class="ms-3"><a class="link-light sns-icon" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '@/assets/css/style.css';
</style>
