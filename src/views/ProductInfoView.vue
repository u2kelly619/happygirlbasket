<!-- 先不做個別頁面，待補 -->

<template>
  
  <!-- <ProductBox v-bind="product"> -->
    <!-- v-model.number限制型別 -->
    <!-- <input type="number" v-model.number="number"> &nbsp;&nbsp;
    <button @click="addCart(product)">加入購物車</button>
  </ProductBox> -->
  
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
      <li class="breadcrumb-item">
        <router-link to="/products">產品</router-link>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        {{ productName }}
      </li>
    </ol>
  </nav>

  <div class="container-fluid product-main">
    <div class="row d-flex justify-content-around">
      <div class="col-lg-4 col-md-4 col-sm-12">
        <div
          class=""
          data-bs-ride="carousel"
        >
          <img :src="img" alt="" class="w-100">
        </div>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-12">
        <h2>{{ productName }}</h2>
        <p class="intro">
          介紹
        </p>
        <p class="price">建議售價</p>
        <h4>{{ price }}</h4>

        <div class="d-flex align-items-center">
          <button class="btn btn-default" @click="decrement()">-</button>

          <div>{{quantity}}</div>

          <button class="btn btn-default" @click="increment()">+</button>
        </div>
        <div class="add-cart">
          <input
            class="btn btn-primary"
            type="button"
            value="加入購物車"
            @click="addCart(id, quantity)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ProductBox from '../components/ProductBox.vue'
import axios from 'axios'

export default {
  // components: { ProductBox },
  data(){
    return{
      quantity: 1,
      products: [],
      // productDetail: [],
      id: [],
      price: [],
      productName: [],
      img: [],
      description: [],
      cart: []
    }
  },
  mounted(){
    // axios.get(`${this.apiPath}/products/${this.$route.params.productId}`)
    //     .then(res => this.product = res.data);
    if(localStorage.getItem('cart')){
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }else{
      this.cart = [];
    }
    
    let vm = this;
    let productDetail = JSON.parse(localStorage.getItem('products'))
    // console.log(JSON.parse(localStorage.getItem('products')))
    console.log(productDetail)
    productDetail.forEach(function (item, index) {
      if (item.id == vm.$route.params.productId) {
        vm.id = item.id;
        vm.price = item.price;
        vm.productName = item.productName;
        vm.img = item.img;
      }
    });
  },
  methods: {
    // addCart: function(product){
    //   // 判斷存貨
    //   if(product.quantity-this.number<0){
    //     alert('存貨不足')
    //     return;
    //   }
      
    //   this.$store.commit('addCart', {
    //     product: product,
    //     number: this.number
    //   })
    //   alert('已加入購物車')
    // }
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity === 1) {
        this.quantity = 1;
      } else {
        this.quantity--;
      }
    },
    addCart(id, quantity) {
      // console.log(this.axios);
      // this.axios.post("/cart-add-item", { productId: id, quantity: quantity}).then((response) => {
      //   console.log(response);
        // this.$router.push('/cart')
      // });

      console.log(id);
      console.log(quantity);
      console.log(this.cart);
      let flag = false;
      this.cart = this.cart.map((item) => {
        if (item.id == id) {
          item.quantity = item.quantity + quantity;
          flag = true;
        }
        return item;
      });
      if (!flag) {
        this.cart.push({
          id,
          quantity,
          title: this.title,
          price: this.price,
          imageUrlOne: this.imageUrlOne,
        });
      } //如果flag是false

      //將productId跟數量存進localStorage的cart中
      localStorage.setItem("cart", JSON.stringify(this.cart));
      alert("已加入購物車");
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