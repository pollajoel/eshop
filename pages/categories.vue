<template>
    <CategoriesLayout/>
</template>

<script>
import AdminBar from "@/components/ui/AdminBar";
import CategoriesLayout from "@/components/ui/categoriesLayout";
export default {
  middleware:"auth",
name: "categories",
  components: {CategoriesLayout, AdminBar}
}
</script>

<style scoped>
.page__categories{display: flex;}
.page__contain{width: 70%}

</style>
