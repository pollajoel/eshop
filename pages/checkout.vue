<template>
  <div>
    <Nav></Nav>
    <Cart/>
    <Footer/>
    </div>
</template>

<script>
import Cart from "~/components/ui/cart";

export default {
name: "checkout",
  components: {Cart}
}
</script>

<style scoped>

</style>
