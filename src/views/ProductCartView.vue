<template>
  <h1 class="text-center my-5">我的購物車</h1>
  <!-- <div class="container-fluid">
    <div class="row justify-content-center">
      <template v-for="product in products" :key="product">
      <ProductBox v-bind="product">
        <p>選購數量: {{product.number}}</p>
        <p></p>
      </ProductBox>
    </template>
    </div>
  </div> -->

<div class="container-fluid">
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-6 table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">產品名</th>
            <th scope="col">單價</th>
            <th scope="col">數量</th>
            <th scope="col">金額</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="product in products" :key="product">
              <tr>
                <th scope="row">{{product.productName}}</th>
                <td>{{product.price}}</td>
                <td>{{product.number}}</td>
                <td>{{product.price*product.number}}</td>
                <td></td>
              </tr>
          </template>
        </tbody>
      </table>
      
    </div>
  </div>

  <div class="text-center my-5">
    <button class="btn btn-outline-secondary" @click="removeAllCart()">Delete all</button>
  </div>
  <div class="text-center">
    <router-link to="/products" class="my-cart"><i class="bi bi-chevron-left"></i>產品頁</router-link>
  </div>
  
    
</div>
  

  

  <div class="container-fluid" style="height:300px"></div>

</template>

<script>
import ProductBox from '../components/ProductBox.vue'

export default {
  inject: ['reload'],
  components: { ProductBox },
  data(){
    return{
      products: this.$store.state.cart,
    }
  },
  methods: {
    removeAllCart(){
      this.$store.state.cart = [];
      console.log(this.$store.state.cart)
      this.$store.commit('removeAllCart', [])
      this.reload()
    }
  }
}
</script>
<style scoped>
  .product-box{
    flex-direction:row;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    justify-content: center;
  }
</style>
