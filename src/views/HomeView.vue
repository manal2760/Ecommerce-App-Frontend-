
<template>
<div id="home">
<header class="_hdr_rlEstat_sec pt-2" style="background-color: #f8f9fc">
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div id="carouselControls" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        </ol>
                        <div class="carousel-inner m-2">

                            <div class="carousel-item active " data-interval="2000">
                                <div class="row align-items-center">
                                    <div class="col-md ">
                                        <h1 class="_hdr_rlEstat_titl text-center" style="font-size:30px">
                                            Make Shopping awesome!
                                        </h1>
                                        <br />

                                        <div class="text-center">
                                            <button type="button" class="btn btn-success">Join Us</button>
                                        </div>
                                    </div>
                                    <div class="col-md ">
                                        <img class="d-block img-fluid w-75 pr-0 pt-5" src="../assets/undraw_shopping_app_flsj.svg">
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item " data-interval="2000">
                                <div class="row align-items-center">
                                    <div class="col-md ">
                                        <p class="_hdr_rlEstat_titl text-center" style="font-size: 40px; line-height:40px; word-break:break-word">
                                            Make Shopping awesome!
                                        </p>
                                        <br />

                                        <div class="text-center">
                                            <button type="button" class="btn btn-success">Join Us</button>
                                        </div>
                                    </div>
                                    <div class="col-md ">
                                        <img class="d-block img-fluid w-75 pr-0 pt-5" src="../assets/undraw_web_shopping_re_owap.svg" style="height:500px" alt="First slide">
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev justify-content-start" href="#carouselControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" style=" filter: invert(1);" aria-hidden="true"></span>
                                <span class="sr-only"></span>
                            </a>
                            <a class="carousel-control-next justify-content-end" href="#carouselControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" style=" filter: invert(1);" aria-hidden="true"></span>
                                <span class="sr-only"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
<br>

<!--    display categories-->
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3"> Top Categories</h2>
        </div>
      </div>
      <div class="row">
        <div v-for="index in this.categorySize" :key="index"
             class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <CategoryBox :category="categories[index-1]" />
        </div>
      </div>
    </div>

        </div>
<hr>
        <!--    display top products-->
    <div class="container py-2">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3"> Top Products</h2>
        </div>
      </div>

      <!--      display products-->

      <div class="row">
        <div v-for="index in this.productSize" :key="index"
             class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex">
          <ProductBox :product="products[index-1]" />
        </div>
      </div>
    </div>


</template>

<script>


import CategoryBox from "../components/Category/CategoryBox";
import ProductBox from "../components/Product/ProductBox";
export default {
  name: "HomeView",
  components: {ProductBox,CategoryBox},
  props: ["categories", "products"],
  data() {
    return {
      categorySize: 0,
      productSize: 0
    }
  },
  mounted() {
    this.categorySize = Math.min(6, this.categories.length );
    this.productSize = Math.min(8, this.products.length);
  }
};
</script>


