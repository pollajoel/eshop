<template>
<div class="page__categories">
  <AdminBar/>
  <div class="page__contain">
    <CategoriesLayout/>
  </div>
</div>
</template>

<script>
import AdminBar from "@/components/ui/AdminBar";
import CategoriesLayout from "@/components/ui/categoriesLayout";
export default {
name: "categories",
  components: {CategoriesLayout, AdminBar}
}
</script>

<style scoped>
.page__categories{display: flex;}
.page__contain{width: 70%}

</style>
