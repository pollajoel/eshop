<template>
  <div class="container__header">
    <Registerbar/>
    <header class="header__main bg-gray-100 shadow-lg">
      <nav class="header__nav">
        <ul class="nav__wrapper p-16">
          <li class="nav__item"><NuxtLink to="/" class="nav__link">Home</NuxtLink></li>
          <li class="nav__item"><NuxtLink to="/shop">e-shop</NuxtLink></li>
          <li class="nav__item"><NuxtLink to="/contact">Contact</NuxtLink></li>
          <li class="nav__item"><NuxtLink to="/contact">Panier</NuxtLink></li>
          <li class="nav__divider"></li>
          <li><Dropdown/></li><!-- display when the user is login -->
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import Dropdown from "@/components/ui/dropdown";
import Registerbar from "@/components/ui/registerbar";
export default {
name: "headerComponent",
  components: {Registerbar, Dropdown}
}
</script>

<style scoped scss>
    .nav__wrapper {
        display:flex;
        align-items:center;
        justify-content:center;
    }

    .nav__wrapper li {
        margin: 0px 20px;
    }
    .nav__divider{ border-right: 1px solid #e9ecef;}

</style>
