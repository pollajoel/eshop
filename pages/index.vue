<template>
    <div>


     <Caroussel>
       <caroussel-slide class="pl-32 pr-32">
         <caroussel-inner imgurl="https://cdn.pixabay.com/photo/2014/05/18/11/25/pizza-346985_960_720.jpg"></caroussel-inner>
       </caroussel-slide>
       <caroussel-slide class="pl-32 pr-32">
         <caroussel-inner imgurl="https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg"></caroussel-inner>
       </caroussel-slide>
       <caroussel-slide class="pl-32 pr-32">
         <caroussel-inner></caroussel-inner>
       </caroussel-slide>

     </Caroussel>

      <div>
        <div class="min-h-screen min-w-screen bg-gray-100 flex items-center">
  <div>
    <div class="flex flex-col max-w-md bg-white px-8 py-6 rounded-xl space-y-5 items-center">
      <img class="w-full rounded-md" src="https://coffeeordie.com/wp-content/uploads/2019/03/FraserCOVER2.jpg" alt="motivation" />
      <p class="text-center leading-relaxed">In a thread on Reddit which has garnered nearly 10,000 replies, people who go to the gym every day (or practice some kind of other daily skill) have been sharing the things that help them stay motivated and proactive in keeping up with their good habits.</p>
      <span class="text-center">By Matt Fraser</span>
      <button class="px-24 py-4 bg-gray-900 rounded-md text-white text-sm focus:border-transparent">Read article</button>
    </div>
  </div>
</div>

      </div>



  </div>
</template>

<script>

import Caroussel from "@/components/caroussel/caroussel";
import CarousselSlide from "@/components/caroussel/carousselSlide";
import CarousselInner from "@/components/caroussel/carousselInner";
export default {
  components: {CarousselInner, CarousselSlide, Caroussel},
  computed:{
    isauth(){
      return this.$store.state.auth
    }
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
