<template>
  <!-- PRODUCT -->
  <h1 class="text-center my-5">產品</h1>
  <div class="container-fluid mb-5">
    <div class="row justify-content-center">
      <template v-for="product in products">
        <ProductBox v-bind="product" @number-update="numberUpdate">
        <!-- <input class="form-control" type="number" v-model.number="number"> -->
        <div class="d-flex">
          <button class="btn btn-primary my-3 me-2 flex-grow-1" @click="addCart(product)">加入購物車</button>
          <button class="btn btn-outline-primary my-3"><i class="bi bi-search"></i></button>
        </div>
        </ProductBox>
        
      </template>
    </div>
  </div>
  
  <div class="container-fluid">
    <div class="row">
      <div class="text-center">
        <router-link to="/cart" class="my-cart"><i class="bi bi-cart"></i> 我的購物車</router-link>
      </div>
    </div>
  </div>
  
  <div class="container-fluid" style="height:300px"></div>
</template>

<script>
import ProductBox from '@/components/ProductBox.vue'
import axios from 'axios'

export default {
  inject: ['reload'],
  components: {
    ProductBox
  },
  data(){
    return{
      products: [],
      number: 0,
      apiPath: this.$store.state.apiPath
    }
  },
  mounted(){
    axios.get(this.apiPath)
         .then(res => this.products = res.data)
  },
  methods: {
    addCart: function(product){
      // 判斷存貨
      // if(product.quantity-this.number<0){
      //   alert('存貨不足')
      //   return;
      // }
      
      this.$store.commit('addCart', {
        product: product,
        number: this.number
      })
      alert('已加入購物車')
      console.log(product)
      console.log(this.$store.state.cart)
      console.log(this.number)
      this.reload()
    },
     numberUpdate(value){
       this.number = value
       console.log(this.number)
      }
  }
}

</script>
