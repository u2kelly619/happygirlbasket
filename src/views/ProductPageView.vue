<template>
  <!-- PRODUCT -->
  <h1 class="text-center my-5">產品</h1>
  <div class="container-fluid mb-5">
    <div class="row justify-content-center">
      <template v-for="product in products">
        <ProductBox v-bind="product"></ProductBox>
      </template>
    </div>
  </div>
  
  <div class="container-fluid">
    <div class="row">
      <div class="text-center">
        <router-link to="/product-cart" class="my-cart"><i class="bi bi-cart"></i> 我的購物車</router-link>
      </div>
    </div>
  </div>
  
  <div class="container-fluid" style="height:300px"></div>
</template>

<script>
import ProductBox from '@/components/ProductBox.vue'
import axios from 'axios'

export default {
  components: {
    ProductBox
  },
  data(){
    return{
      products: [],
      apiPath: this.$store.state.apiPath
    }
  },
  mounted(){
    axios.get(this.apiPath)
         .then(res => this.products = res.data)
  }
}

</script>
