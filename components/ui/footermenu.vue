<template>
  <div class="footer__widget">
    <h1 class=" widget__title">{{ titleText }}</h1>
    <ul class="widget__navwrapper">
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "footermenu",
  props:{
    titleText: {
      String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>


</style>
