<template>
    <div>
      ggggggggggggg
{{ isauth }}



  </div>
</template>

<script>

export default {
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
