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
    loginStatus(state){
      return state.loginStatus
    }
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
    getLoginStatus(context){
      this.axios.get('/loginStatus')
          .then((response) => {
            console.log(response.data)
            context.commit('updateLoginStatus')
          })
          .catch((err)=>{
            console.log(err);
          })
    },
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
