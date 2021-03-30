<template>
  <div style="display: flex">
    <div class="w-2/4">
      <img class="w-full slider_height"
           :src="imgurl">
    </div>
    <div class="w-2/4 border ">
      <h1 class="text-5xl pt-20">title</h1>
      <div class="description__contain" style="display: flex;flex-direction:column">
        <div class="description__text">
          <p>Lorem ipsum Lorem ipsum</p>
        </div>
        <div class="description__text">
          <h1>14Euros</h1>
        </div>
        <div class="action__button" style="display: flex">
                 <span>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        style="height: 56px;">
                     <path fill-rule="evenodd"
                           d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                           clip-rule="evenodd"/>
                   </svg>
                 </span>
          <span>
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        style="height: 56px;">
                     <path fill-rule="evenodd"
                           d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                           clip-rule="evenodd"/>
                   </svg>
                 </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousselInner",
  props:{
    imgurl: {
      type: String,
      default:'https://cdn.pixabay.com/photo/2021/03/22/13/48/anemone-6114655_960_720.jpg'
    }
    }

}
</script>

<style scoped>
slider_height{
  height: 520px
}

</style>
