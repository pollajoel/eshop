<template>
  <div>
    <slot></slot>
    <div class="nav__bouton">
      <button class="caroussel__nav carousel__next" @click="next">suiv</button>
      <button class="caroussel__nav carousel__previous" @click="previous">préc</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "caroussel",
  data(){
    return{
      index:0,
      slides:[]
    }
  },
  mounted(){
    this.slides = this.$children
    this.slides.forEach((slide,i)=>{
      slide.index = i
    })
    console.log( this.$children )
  },

computed:{
    slidescount(){
      return this.slides.length
    }
}
  ,
  methods:{
    next(){
      this.index++;
      if( this.index >= this.slidescount)
        this.index=0
    },
    previous(){
      this.index--;
    if( this.index < 0)
      this.index = this.slidescount -1;
    }
  }
}
</script>

<style scoped>
.nav__bouton{
  display: flex;
  justify-content: center;
}

</style>
