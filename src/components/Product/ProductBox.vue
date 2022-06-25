<template>
   <div class="card rounded shadow-sm border-0">
        <div class="card-body p-4">
            <router-link :to="{name: 'EditProduct', params: {id: product.id}}" v-show="$route.name == 'ProductList'">
            <button class="btn btn-light" style="float:right">Edit</button> </router-link>
            <img class="img-fluid d-block mx-auto mb-3" :src="product.imageURL" alt="" >
            <router-link :to="{name: 'ShowDetails', params: {id : product.id}}">
            <h5> <a href="#" class="text-dark">{{ product.name }}</a></h5>
            </router-link>
          
          <p class="small text-muted font-italic">{{ product.description }}</p>
          <h4 class="product-old-price">${{product.price}} </h4>
											
          
          
        </div>
      </div>
       
</template>

<script>
    export default {
        name: "ProductBox",
        props: ["product"]
    }
</script>

<style>
body {
  min-height: 100vh;
  background: #fafafa;
}


.social-link {
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  border-radius: 50%;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.social-link:hover,
.social-link:focus {
  background: #ddd;
  text-decoration: none;
  color: #555;
}

.progress {
  height: 10px;
}

.card-img-top {
  object-fit: cover;
}
</style>