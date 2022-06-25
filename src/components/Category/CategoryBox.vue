<template>
<div class="card rounded shadow-sm border-0">
        <div class="card-body p-4">
           <router-link :to="{name: 'EditCategory', params: {id: category.id}}"  v-show="$route.name == 'CategoryList'">
            <button class="btn btn-light" style="float:right">Edit</button> </router-link>
            
            <img class="img-fluid d-block mx-auto mb-3" :src="category.imageUrl" alt="" >
             <router-link :to="{name: 'ListProducts', params: {id: category.id} }">
             <h5> <a href="#" class="text-dark">{{ category.categoryName }}</a></h5>
             </router-link>
          
          <p class="small text-muted font-italic">{{ category.description }}</p>
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star text-success"></i></li>
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          </ul>
          
        </div>
      </div>
</template>


<script>
export default {
      
      name : "CategoryBox",
      props : ["category"],
      methods : {},
};

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