import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import BrandStoryView from '../views/BrandStoryView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import LoginView from '../views/LoginView.vue'
import NewsView from '../views/NewsView.vue'
import ProductCartView from '../views/ProductCartView.vue'
import ProductPageView from '../views/ProductPageView.vue'
import ProductInfoView from '../views/ProductInfoView.vue'
import RecipeView from '../views/RecipeView.vue'



const routes = [
  {
    path: '/',
    name: 'IndexView',
    component: IndexView,
  },
  {
    path: '/brand-story',
    name: 'BrandStoryView',
    component: BrandStoryView,
  },
  {
    path: '/contact-us',
    name: 'ContactUsView',
    component: ContactUsView,
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
  },
  {
    path: '/news',
    name: 'NewsView',
    component: NewsView,
  },
  {
    path: '/cart',
    name: 'ProductCartView',
    component: ProductCartView,
  },
  {
    path: '/products',
    name: 'ProductPageView',
    component: ProductPageView,
  },
  // {
  //   path: '/products/:productId',
  //   name: 'Product',
  //   component: ProductInfoView
  // },
  {
    path: '/recipe',
    name: 'RecipeView',
    component: RecipeView,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
