<template>
<ProductsComponent/>
</template>

<script>
import ProductsComponent from "@/components/ui/products/productsComponent";
export default {
   name: "products",
   middleware:"auth",
   components: {ProductsComponent}
}
</script>

<style scoped>

</style>
