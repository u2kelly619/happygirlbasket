<template>
    <div class="product-card card col-12 col-sm-6 col-lg-2 m-3">
        <div class="card-body text-center">
            <h5 class="card-title">{{productName}}</h5>
            <img :src="img" alt="" class="img-fluid mb-3">
            <!-- <img src="https://i.imgur.com/6AONezf.jpg" alt="" class="img-fluid mb-3"> -->
            <a class="btn btn-primary">
                <!-- ${pokemon.picked ? '<i class="bi bi-dash"></i>從購物車移除' : '<i class="bi bi-plus"></i>加入購物車'} -->
                add to cart
            </a>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    'productName':String,
    'img':String,
  },
  methods:{
    redirectProduct: function(id){
      this.$router.push(`/products/${id}`)
    },
  }
}
</script>
<style scoped>
  
</style>