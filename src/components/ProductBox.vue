<template>
    <div class="product-card card col-12 col-sm-6 col-lg-2 m-3">
        <div class="card-body text-center">
            <h5 class="card-title">{{productName}}</h5>
            <img :src="img" alt="" class="img-fluid mb-3">
            <p>${{price}}</p>
            <!-- <button class="btn btn-primary">
                ${pokemon.picked ? '<i class="bi bi-dash"></i>從購物車移除' : '<i class="bi bi-plus"></i>加入購物車'}
                加入購物車
            </button> -->
        </div>
        <input class="form-control" type="number" v-model.number="number">
        <slot></slot>
    </div>
</template>
<script>
export default {
  data(){
    return{
      number: 0,
    }
  },
  props: {
    'id':Number,
    'productName':String,
    'img':String,
    'price':Number,
  },
  methods:{
    redirectProduct: function(id){
      this.$router.push(`/products/${id}`)
    },
  },
  watch: { //監聽number
      number: { //number有更改的話就把值傳出去
          handler(value) {
              //把value傳給numberUpdate(number-update)，讓他把value帶入去執行numberUpdate()，
              this.$emit('numberUpdate', value);
          }
      }
  }
}
</script>
<style scoped>
  
</style>