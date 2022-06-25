<template>
<div class="container">
    <div class="row">
         <div class="pl-4 text-center">
            <br> <br><h3>Add New Category</h3>
            <hr>
         </div>
    </div>
    <br>
   <form>
  
  <div class="form-group ">
       <input type="text" class="form-control" placeholder="Category Name" v-model="categoryName">
  </div>
 
  <div class="form-group">
    <textarea class="form-control" rows="3" placeholder="Category Description" v-model="description"></textarea>
  </div>

   <div class="form-group">
    <input type="text" class="form-control" placeholder="Category Image URL" v-model="imageUrl">
  </div>
 
  <button type="button" class="btn btn-primary col-3" @click="addCategory">Add</button>
 
</form>
</div>
</template>


<script>
const axios= require("axios");
const sweetalert= require("sweetalert");
export default{
    data(){
        return{
            categoryName: "",
            description: "",
            imageUrl: "",
        };
    },

    methods :{
      addCategory(){
        console.log(this.categoryName, this.description);
         const newCategory ={
           categoryName: this.categoryName,
           description : this.description,
           imageUrl: this.imageUrl,
         };

         const baseUrl= "http://localhost:8080";
         axios({
            method : "post",
            url : `${baseUrl}/category/create/`,
            data : JSON.stringify(newCategory),
            headers :{
                 'Content-Type' : 'application/json',
                 'Accept' : 'application/json',
            },
         }).then(()=> {
                  this.$emit("fetchData");
                  this.$router.push({name: 'CategoryList'})
                 sweetalert({
                    text : 'Category Added Successfully',
                    icon : 'success',
                 });
         }).catch(err =>{
            console.log(err);
         })
      },
    },
};
</script>

<style scoped ></style>