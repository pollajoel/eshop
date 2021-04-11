<template>
    <AdminUserComponent/>
</template>

<script>
import AdminBar from "@/components/ui/AdminBar";
import AdminUserComponent from "@/components/ui/admin/adminUserComponent";
export default {
  middleware:"auth",
  name: "users",
  components: {AdminUserComponent, AdminBar}
}
</script>

<style scoped>
.page__users{display: flex;}
.page__contain{width: 70%}
</style>
