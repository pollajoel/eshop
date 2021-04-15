<template>
<div class="search__form">
  <form>
    <div class="select__list_of_categorie">
      <h1> Catégories</h1><br/>
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative mb-2" role="alert" v-for="(cat,index) in categories">
        <strong class="font-medium"><nuxt-link :to="`/cat/${cat._id}`"><b>{{index +1 }}.</b> {{ cat.title }}</nuxt-link></strong>
        <!--
        <span class="absolute top-0 bottom-0 right-0 px-4 py-1">
          <b>( {{ cat.products.length}} )</b>
        </span>
        -->
      </div>
    </div>
  </form>
</div>
</template>

<script>
export default {
name: "CategoriesList",
  data:function (){
  return{
    categories:[]
  }
  },
  mounted(){
     this.$categories().then(res => res.json()).then((data)=>{
       this.categories = data.data
     }).catch(err=>{
     })
  }
}
</script>

<style scoped>

</style>
