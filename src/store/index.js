import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    apiPath: 'products.json',
    cart: [],
    loginStatus: 0
  },
  getters: {
    currentQuantiy(state){
      // let sum = 0;
      // for(i=0; i<state.cart.length; i++){
      //   sum += state.cart[i].number
      // }
      // return sum
      console.log(state.cart)
      return state.cart.reduce((productNumber, product) => parseInt(productNumber)+product.number, 0)
    },
    getLoginStatus(){
      this.axios.get('/loginStatus')
          .then((response) => {
            // console.log(response.data)
            if(response.data.loginStatus == 1){
              state.loginStatus = 1
            } else {
              state.loginStatus = 0
            }
          })
          .catch((err)=>{
            console.log(err);
          })
    },
  },
  mutations: {
    updateLoginStatus(state, {loginStatus}){
      state.loginStatus = loginStatus
    },
    addCart(state, data){
      let isNewProduct = true
      //cart = [product, product]
      state.cart.map(function(product){
        if(product.id == data.product.id){
          product.number += data.number
          isNewProduct = false
        }
        return product
      })

      if(isNewProduct){
        let newProduct = data.product
        newProduct.number = data.number
        state.cart.push(newProduct)
      }
    },
    removeAllCart(state, cart){
      state.cart = cart
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
