<template>
    <div>
       <seach-bar></seach-bar>
     <Caroussel>
       <caroussel-slide class="pl-32 pr-32" >
         <caroussel-inner imgurl="https://cdn.pixabay.com/photo/2014/05/18/11/25/pizza-346985_960_720.jpg"></caroussel-inner>
       </caroussel-slide>
       <caroussel-slide class="pl-32 pr-32">
         <caroussel-inner imgurl="https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg" name="produit1"></caroussel-inner>
       </caroussel-slide>
       <caroussel-slide class="pl-32 pr-32">
         <caroussel-inner></caroussel-inner>
       </caroussel-slide>
     </Caroussel>
      <div>
        <div class="flex justify-left items-center min-h-screen bg-gray-100">
          <popular-product/>
        </div>
      </div>


      </div>





</template>

<script>

import Caroussel from "@/components/caroussel/caroussel";
import CarousselSlide from "@/components/caroussel/carousselSlide";
import CarousselInner from "@/components/caroussel/carousselInner";
import PopularProduct from "@/components/ui/products/popularProduct";
import SeachBar from "@/components/ui/products/seachBar";
export default {
  components: {SeachBar, PopularProduct, CarousselInner, CarousselSlide, Caroussel},
  computed:{
    isauth(){
      return this.$store.state.auth
    }
  },
  data:function (){
    return{
      products:[],
    }
  },
  mounted() {
    this.$products().then(res=>res.json()).then(res=>{
        console.log( res.data )
        this.products = res.data;
      })
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}

</style>
