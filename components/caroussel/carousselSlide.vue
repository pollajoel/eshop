<template>
<div v-show="visible">
  <slot></slot>
</div>
</template>

<script>
export default {
name: "carousselSlide",
  data(){
  return{
    index:0
  }
  },
  computed:{
  visible(){
    return this.index === this.$parent.index
  }
  }

}
</script>

<style scoped>

</style>
