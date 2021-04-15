<template>
  <div class="relative inline-block text-left" v-if="display">
    <div>
      <button type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-expanded="true" aria-haspopup="true">
        <b>Bienvenu:</b> &nbsp;{{ $store.state.name }}
        <!-- Heroicon name: solid/chevron-down -->
        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" @click="MenuLogin">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacite" role="menu" aria-orientation="vertical" aria-labelledby="options-menu" v-bind:style="menulogin" >
      <div class="py-1" role="none">
        <NuxtLink to="account" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" >Mon compte</NuxtLink>
        <NuxtLink to="products" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" v-if="$store.state.isAdmin">Mes produits</NuxtLink>
        <NuxtLink to="orders" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Gestion des commandes</NuxtLink>
        <NuxtLink to="users" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" v-if="$store.state.isAdmin">Gestion des utilisateurs</NuxtLink>
        <NuxtLink to="register" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" v-if="$store.state.isAdmin">Gestion des administrateurs</NuxtLink>
        <NuxtLink to="categories" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" v-if="$store.state.isAdmin">Gestion des categories</NuxtLink>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" @click="ClosedMenu">Fermer</a>
        <form method="POST" action="#" role="none">
          <button type="submit" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" @click="logout">
            Deconnexion
          </button>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  middleware:"auth",
name: "dropdown",
  data:function (){
    return{
        display:false,
        menulogin:"display: none;",
        status:1,
        userName:""
      }
  },
  methods:{
  MenuLogin:function (){
    if( this.status === 1) {
      this.menulogin = "display:block;";
      this.status= 0;
    }else {
      this.menulogin = "display:none;"
      this.status = 1;
    }
    },
    ClosedMenu:function (){
     this.menulogin="display:none;"
    },
    logout:function (){
    this.$store.commit('loggedOut')
      localStorage.clear();
    }
  },
  mounted(){
  this.display = this.$store.state.auth;
  this.userName =  localStorage.getItem('name')
  }
}
</script>

<style scoped>
.opacite{
  z-index: 1;
}

</style>
