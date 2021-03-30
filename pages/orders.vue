<template>
<AdminOdersComponent/>
</template>

<script>
import AdminBar from "@/components/ui/AdminBar";
import ordersComponent from "@/components/ui/ordersComponent";
import AdminOdersComponent from "@/components/ui/orders/adminOdersComponent";
export default {
name: "orders",
  components: {AdminOdersComponent, AdminBar,ordersComponent}
}
</script>

<style scoped>
.order__account{display: flex;}
.order__contain{width: 70%}

</style>
