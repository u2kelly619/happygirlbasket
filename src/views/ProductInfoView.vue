<!-- 先不做個別頁面，待補 -->

<template>
  
      <ProductBox v-bind="product">
        <!-- v-model.number限制型別 -->
        <input type="number" v-model.number="number"> &nbsp;&nbsp;
        <button @click="addCart(product)">加入購物車</button>
      </ProductBox>
    
</template>
<script>
import ProductBox from '../components/ProductBox.vue'
import axios from 'axios'

export default {
  components: { ProductBox },
  data(){
    return{
      number: 0,
      product: '',
      apiPath: this.$store.state.apiPath
    }
  },
  mounted(){
    axios.get(`${this.apiPath}/products/${this.$route.params.productId}`)
        .then(res => this.product = res.data);
  },
  methods: {
    addCart: function(product){
      // 判斷存貨
      if(product.quantity-this.number<0){
        alert('存貨不足')
        return;
      }
      
      this.$store.commit('addCart', {
        product: product,
        number: this.number
      })
      alert('已加入購物車')
    }
  }
}
</script>
<style scoped>
  /* .product{
    width: 60%;
    margin: auto;
  }
  .product-component{
    width: 50%;
    max-width: 350px;
    margin: auto;
  }
  .product-buy{
    text-align: center;
  } */
</style>