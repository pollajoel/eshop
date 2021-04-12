<template>
  <div class="flex flex-col">
        <div class="bg-white shadow p-4 flex">
            <span class="w-auto flex justify-end items-center text-gray-500 p-2">
                <i class="material-icons text-3xl">Chercher</i>
            </span>
            <input class="w-full rounded p-2" name="name" type="text" placeholder="par: 'intitulé du produit'" v-model="name" v-on:keyup="Trouver">
            <input class="w-full rounded p-2" name="description" type="text" placeholder="par: 'description du produit'" v-model="description" v-on:keyup="Trouver">
            <button class="bg-red-400 hover:bg-red-300 rounded text-white p-2 pl-4 pr-4" v-on:click="Trouver">
                    <p class="font-semibold text-xs">Trouver</p>
            </button>
        </div>
    <div class="bg-indigo-900 text-center py-4 lg:px-4" v-show="resultat">
      <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
        <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">{{searchResult.length}} trouvé(s)</span>
        <span class="font-semibold mr-2 text-left flex-auto"> dans la liste des produits correpond à votre recherche.</span>
        <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
      </div>
    </div>


    </div>
</template>

<script>
export default {
name: "seachBar",
  data(){
  return{
    name:"",
    description:"",
    resultat:false,
    searchResult:[],
  }
  },
  methods:{
  Trouver(){
    this.resultat =false;

    if( this.name!="" || this.description!="") {
      this.$findProductBy(this.description, this.name).then(res => res.json()).then(res => {
        console.log(res);
        if (res.length > 0) {
          this.resultat = true;
          this.searchResult = res;
        } else {
          this.resultat = false;
          this.searchResult = [];
        }

      }).catch(err => {
        console.log(err)
      })
    }


  },
  }

}
</script>

<style scoped>

</style>
