<template>
  <Navbar></Navbar>
  <router-view/>
  <Footer></Footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default{
  components: {
    Navbar,
    Footer
  },
  data(){
    return{
      pageUrl: '/'
    }
  }
}

$(document).ready(function(){
    const $navbar = $('#navbar');
   
    $(document).on('scroll',function(){
            // offset() //用來得知元素的座標，取得當前元素的位置偏移值，top:由上面往下算
            // if ($navbar.offset().top > 80) {
            //     $navbar.addClass('shadow'); //如果偏移值>80，加上shadow的class來加上陰影效果
            // } else {
            //     $navbar.removeClass('shadow');
            // }
            //也可以用三元判斷式，更簡潔
            // console.log('scroll')
            $navbar.offset().top > 80 ? //偏移值是否有>80? true的話加上shadow的class，false的話移除
                $navbar.addClass('shadow') : $navbar.removeClass('shadow');
        })
  });

</script>

<style>
@import '@/assets/css/style.css';
</style>
