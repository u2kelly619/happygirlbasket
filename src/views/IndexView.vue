<template>
    <!-- MAIN COVER -->
      <main class="container-fluid p-5 mb-5">
          <div class="row">
              <div class="main-img col-12 col-md-6 order-2 order-md-1">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="@/assets/tomato-soup.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="@/assets/hotpot.jpg" class="d-block w-100" alt="...">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div class="main-text col-12 col-md-6 order-1 order-md-2 p-5">
                  <h1 class="main-text-title mb-3">喜妹菜籃子</h1>
                  <p class="fs-5">堅持踏實的日曝、石壓與陶缸發酵，將天然食材真實呈現，用時間換取原始的好滋味。</p>
                  <p class="fs-5">多用一點堅持與一點態度，呈現的不是只有手作，而是一種生活態度與主張。從最簡單的食材下廚吧！</p>
                  <router-link to="/products" class="main-cta btn btn-primary btn-lg">查看產品</router-link>
              </div>
          </div>
      </main>

      <!-- PRODUCT CART -->
      <h2 class="text-center pt-5 my-5">嚴選好味道</h2>
      <div class="container-fluid mt-3 mb-5">
        <div class="row justify-content-center">
          <div class="product-card card col-12 col-sm-6 col-lg-2 m-3">
            <img src="@/assets/product-cabbage.jpg" class="card-img-top mt-3" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title">陶缸酸菜</h5>
              <p class="card-text"></p>
              <router-link to="/products" class="btn btn-primary">More</router-link>
            </div>
          </div>
          <div class="product-card card col-12 col-sm-6 col-lg-2 m-3">
            <img src="@/assets/product-tsaibo-sm.jpg" class="card-img-top mt-3" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title">甕藏菜脯</h5>
              <p class="card-text"></p>
              <router-link to="/products" class="btn btn-primary">More</router-link>
            </div>
          </div>
          <div class="product-card card col-12 col-sm-6 col-lg-2 m-3">
            <img src="@/assets/meigan.jpg" class="card-img-top mt-3" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title">竹曬梅干</h5>
              <p class="card-text"></p>
              <router-link to="/products" class="btn btn-primary">More</router-link>
            </div>
          </div>
          <div class="product-card card col-12 col-sm-6 col-lg-2 m-3">
            <img src="@/assets/sour-beans.jpg" class="card-img-top mt-3" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title">私房酸豆</h5>
              <p class="card-text"></p>
              <router-link to="/products" class="btn btn-primary">More</router-link>
            </div>
          </div>
          <div class="product-card card col-12 col-sm-6 col-lg-2 m-3">
              <img src="@/assets/cloud.jpg" class="card-img-top mt-3" alt="...">
            <div class="card-body text-center">
              <h5 class="card-title">暖日雲片</h5>
              <p class="card-text"></p>
              <router-link to="/products" class="btn btn-primary">More</router-link>
            </div>
          </div>
        </div>
      </div>
      

      <!-- INTRO -->
      <h2 class="text-center pt-5 mt-5">客家精神，手作傳承。</h2>
      <div class="container-fluid p-5">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-4 mb-3">
            <img src="@/assets/farm-3.jpg" alt="" class="img-fluid">
          </div>
          <div class="col-12 col-lg-4 mb-3">
            <h3>回到原點，從零開始。</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo iste fuga praesentium iure labore laborum natus obcaecati assumenda animi consequuntur aliquam accusantium commodi expedita quis veritatis, fugiat deserunt omnis unde!
            Facilis aut eius nihil vitae cumque fuga, quia optio vero eos aliquid dicta voluptas fugit pariatur mollitia consectetur minus rem? Deleniti excepturi autem beatae necessitatibus libero incidunt repudiandae quam modi.
          </div>
        </div>
      </div>
      <div class="container-fluid p-5">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-4 order-2 order-lg-1 mb-3">
            <h3>細心呵護每一口。</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo iste fuga praesentium iure labore laborum natus obcaecati assumenda animi consequuntur aliquam accusantium commodi expedita quis veritatis, fugiat deserunt omnis unde!
            Facilis aut eius nihil vitae cumque fuga, quia optio vero eos aliquid dicta voluptas fugit pariatur mollitia consectetur minus rem? Deleniti excepturi autem beatae necessitatibus libero incidunt repudiandae quam modi.
          </div>
          <div class="col-12 col-lg-4 order-1 order-lg-2 mb-3">
            <img src="@/assets/green_veg.jpg" alt="" class="img-fluid">
          </div>
        </div>
      </div>
      <div class="container-fluid p-5">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-4 mb-3">
            <img src="@/assets/meigan-making.jpg" alt="" class="img-fluid">
          </div>
          <div class="col-12 col-lg-4 mb-3">
            <h3>不求富貴，只願缸缸好。</h3>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo iste fuga praesentium iure labore laborum natus obcaecati assumenda animi consequuntur aliquam accusantium commodi expedita quis veritatis, fugiat deserunt omnis unde!
              Facilis aut eius nihil vitae cumque fuga, quia optio vero eos aliquid dicta voluptas fugit pariatur mollitia consectetur minus rem? Deleniti excepturi autem beatae necessitatibus libero incidunt repudiandae quam modi.
            </p>
            </div>
        </div>
      </div>
      <div class="container-fluid p-5">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-4 order-2 order-lg-1 mb-3">
            <h3>堅持厚工，樣樣不馬虎。</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo iste fuga praesentium iure labore laborum natus obcaecati assumenda animi consequuntur aliquam accusantium commodi expedita quis veritatis, fugiat deserunt omnis unde!
            Facilis aut eius nihil vitae cumque fuga, quia optio vero eos aliquid dicta voluptas fugit pariatur mollitia consectetur minus rem? Deleniti excepturi autem beatae necessitatibus libero incidunt repudiandae quam modi.
          </div>
          <div class="col-12 col-lg-4 order-1 order-lg-2 mb-3">
            <img src="@/assets/meigan-making-2.jpg" alt="" class="img-fluid">
          </div>
        </div>
      </div>

      <!-- RECIPE POST -->
      <section class="recipe">
        <h2 class="text-center pt-5 mt-5">美味秘訣</h2>
        <div class="container-fluid">
          <div class="row justify-content-center py-5">
            <div class="recipe-post card col-12 col-sm-6 col-lg-3 m-3">
              <img src="@/assets/hotpot-2.jpg" class="card-img-top mt-3" alt="...">
              <div class="card-body">
                <h5 class="card-title">酸菜白肉鍋</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class="text-end"><a href="#">Read More</a></p>
              </div>
            </div>
            <div class="recipe-post card col-12 col-sm-6 col-lg-3 m-3">
              <img src="@/assets/soup.jpg" class="card-img-top mt-3" alt="...">
              <div class="card-body">
                <h5 class="card-title">天然酸辣肉羹湯</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class="text-end"><a href="#">Read More</a></p>
              </div>
            </div>
            <!-- <div class="card col-12 col-sm-6 col-lg-3">
              <img src="@/assets/fish-soup.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">私房魚湯</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class="text-end"><a href="#">Read More</a></p>
              </div>
            </div> -->
            <div class="recipe-post card col-12 col-sm-6 col-lg-3 m-3">
              <img src="@/assets/tsaibo-soup.jpg" class="card-img-top mt-3" alt="...">
              <div class="card-body">
                <h5 class="card-title">菜脯雞湯</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class="text-end"><a href="#">Read More</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container-fluid" style="height:100px;background-color:var(--bg-color)"></div>

</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  
  mounted() {
    this.axios.get("/productList").then((response) => {
      console.log(response);

      this.products = response.data.data;
      //存進localStorage
      localStorage.setItem("products", JSON.stringify(this.products)); //products自己取的
    });
  },
};

</script>