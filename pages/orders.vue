<template>
<div class="order__account">
  <AdminBar/>
  <div class="order__contain">
     <ordersComponent/>
  </div>

</div>
</template>

<script>
import AdminBar from "@/components/ui/AdminBar";
import ordersComponent from "@/components/ui/ordersComponent";
export default {
name: "orders",
  components: {AdminBar,ordersComponent}
}
</script>

<style scoped>
.order__account{display: flex;}
.order__contain{width: 70%}

</style>
