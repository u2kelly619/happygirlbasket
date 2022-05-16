<template>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top bg-white" id="navbar">
        <div class="container-fluid mx-auto">
          <router-link to="/" class="navbar-brand">
            <img src="@/assets/LOGO.jpg" alt="" width="80">
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/brand-story" class="nav-link active">品牌故事</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/news" class="nav-link active">最新消息</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                產品
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><router-link to="/product-page" class="dropdown-item">陶缸酸菜</router-link></li>
                  <li><router-link to="/product-page" class="dropdown-item">甕藏菜脯</router-link></li>
                  <li><router-link to="/product-page" class="dropdown-item">竹曬梅干</router-link></li>
                  <li><router-link to="/product-page" class="dropdown-item">私房酸豆</router-link></li>
                  <li><router-link to="/product-page" class="dropdown-item">暖日雲片</router-link></li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/recipe" class="nav-link active">食譜</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact-us" class="nav-link active">聯絡我們</router-link>
              </li>
              <li class="nav-item ps-5">
                <router-link to="/product-cart" class="nav-link active"><i class="bi bi-cart"></i></router-link>
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link active">登入/註冊</router-link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '@/assets/css/style.css';
</style>
