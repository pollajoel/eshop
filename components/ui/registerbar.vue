<template>
<div class="container__register h-8">
  <span class="font-hairline pl-8">Faites de chaque achats une récompense</span>
  <ul class="nav__wrapper pr-6">

   <li>
      <NuxtLink to="/login">
        <span class="text-base tracking-tighter font-hairline">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd" />
          </svg>
          Connexion
        </span>
      </NuxtLink>
    </li>

    <li>
      <NuxtLink to="/register">
        <span class="text-base tracking-tighter font-hairline text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
              S'inscrire
        </span>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/forgetpassword">
        <span class="text-base tracking-tighter font-hairline">
          mot de passe oublié ?
        </span>
      </NuxtLink>
    </li>
  </ul>
</div>
</template>

<script>
export default {
name: "registerbar"
}
</script>

<style scoped>
.nav__wrapper{
  display:flex;
  display: -ms-flex;
	display: -webkit-flex;
  align-items:center;
  justify-content:right;
}
.nav__wrapper li{
  margin: 0px 10px;
}

.container__register{
  display: flex;
  display: -ms-flex;
	display: -webkit-flex;
}

.container__register > span, .container__register > ul {
  width: 50%;
}


.container__register span svg{
  height: 18px;
  display: inline;
}




</style>
