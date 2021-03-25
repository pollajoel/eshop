<template>
  <div>
    <headerComponent/>
    <Nuxt />
    <FooterComponent/>
  </div>
</template>

<script>
import headerComponent from "@/components/ui/headerComponent";
import FooterComponent from "@/components/ui/footerComponent";
export default {
  name: "adminLayout",
  components: {FooterComponent, headerComponent}
}
</script>

<style scoped>

</style>
