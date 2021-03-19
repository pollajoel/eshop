<template>
  <div class="container__footer bg-gray-200 h-48 pr-32 pl-32 pt-16 pb-16">
    <footermenu titleText="Navigation"/>
    <footermenu titleText="Navigation"/>
    <footermenu titleText="Navigation"/>
  </div>
</template>

<script>

import Footermenu from "@/components/ui/footermenu";
export default {
  name: "footer",
  components: {Footermenu}
}
</script>

<style scoped>
.container__footer{
  display: flex;
  display: -moz-flex;
}

.container__footer > div {
  width: 33.33%;
}

</style>
