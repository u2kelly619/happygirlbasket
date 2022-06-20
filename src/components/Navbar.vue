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
              <li class="nav-item">
                <router-link to="/products" class="nav-link active">產品</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/recipe" class="nav-link active">食譜</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/contact-us" class="nav-link active">聯絡我們</router-link>
              </li>
              <li class="nav-item ps-5">
                <router-link to="/cart" class="nav-link active"><i class="bi bi-cart"></i> ({{currentQuantiy}})</router-link>
              </li>
              <template v-if="$store.state.loginStatus === 0">
                <li class="nav-item">
                  <router-link to="/login" class="nav-link active">登入{{loginStatus}}</router-link>
                </li>
                <li class="nav-item">
                <router-link to="/signup" class="nav-link active">註冊</router-link>
                </li>
              </template>
              <template v-if="$store.state.loginStatus === 1">
                <li class="nav-item">
                <router-link to="/member" class="nav-link active">會員中心</router-link>
                </li>
                <li class="nav-item">
                  <a href="/" class="nav-link active" @click="logout">登出{{loginStatus}}</a>
                </li>
              </template>
            </ul>
          </div>
        </div>
    </nav>
</template>

<script>
export default {
  data(){
    return{
      // loginStatus: null
      // loginStatus: this.$store.state.loginStatus
    }
  },
  async mounted() {
      await this.$store.dispatch('getLoginStatus')
      console.log('loginStatus', this.$store.state.loginStatus)
  },
  computed:{
    currentQuantiy(){
      return this.$store.getters.currentQuantiy
    },
  },
  methods: {
    async logout() {
        await this.axios.post('/logout').then((response) => {
            console.log("logout", response)
            this.$store.dispatch('getLoginStatus')
        })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '@/assets/css/style.css';
</style>
