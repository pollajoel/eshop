<template>
  <!-- component -->
<div class="py-6">
  <div class="flex w-full slider_height bg-white shadow-lg rounded-lg overflow-hidden ">
    <div class="w-1/2 bg-cover" :style="{'background-image': 'url('+imgurl+')'}">
    </div>
    <div class="w-1/2 p-4 pt-5">
      <categories-list/>
    </div>
  </div>
</div>
</template>

<script>
import CategoriesList from "@/components/ui/categories/CategoriesList";
export default {
  name: "carousselInner",
  components: {CategoriesList},
  props:{
    imgurl: {
      type: String,
      default:'https://cdn.pixabay.com/photo/2021/03/22/13/48/anemone-6114655_960_720.jpg'
    },
    name:{
      type:String
    }
    }

}
</script>

<style scoped>
.slider_height{
  height:500px;
}

</style>
