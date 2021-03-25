<template>
<div class="overflow-x-auto" >
  <div class="bg-white shadow-md rounded my-6">
    <form>
    <table class="min-w-max w-full table-auto">
      <thead>
      <tr>
           <th colspan="2"><succesArlete :successmessage="successmessage" v-if="successmessage"/></th>
      </tr>
      <tr>
        <th class="w-full" colspan="2"><ErrorAlerte :errormessage="errorMessage" v-if="errorMessage"class="w-full" /></th>
      </tr>
      <tr>
        <th class="py-3 px-6 text-left"> <input type="text" name="newCat" v-model="newCat" placeholder="Nom de la catégorie" @keyup="clear" class="rounded-xl border h-8 text-sm"/> </th>
        <th> <button @click.prevent="AddCat" class="text-sm"> Ajouter</button> </th>
      </tr>
      <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
        <th class="py-3 px-6 text-left">Catégorie(s)</th>
        <!--
          <th class="py-3 px-6 text-left">nombre d'articles</th>
          -->
        <th class="py-3 px-6 text-center">Actions</th>
      </tr>
      </thead>
       <tbody class="text-gray-600 text-sm font-light">
       <tr class="border-b border-gray-200 hover:bg-gray-100" v-for="cat in categories" :key="cat.id">
         <td class="py-3 px-6 text-left whitespace-nowrap">
           <input type="text" name="title"  v-model="cat.title" />
         </td>
         <!--
         <td class="py-3 px-6 text-left whitespace-nowrap">
           {{ cat.title}}
         </td>
         -->
         <td class="py-3 px-6 text-center">
           <div class="flex item-center justify-center">
             <!--
             <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" v-model="categories.id" @click.prevent="edit">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
               </svg>
             </div>
             -->
             <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"  @click.prevent="deleted(cat)">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
               </svg>
             </div>
           </div>
         </td>
       </tr>


       </tbody>
    </table>
      </form>
        </div>
</div>
</template>

<script>
import categories from "@/pages/categories";
import ErrorAlerte from "@/components/ui/errorAlerte";
import SuccesArlete from "@/components/ui/succesArlete";

export default {
name: "categoriesLayout",
  components: {ErrorAlerte,SuccesArlete},
  layout:"adminLayout",
  data:function (){
  return{
      categories:[],
      newCat:"",
    errorMessage:"",
    successmessage:""
  }
  },
  methods:{
  clear:function (){
    this.errorMessage="";
    this.successmessage="";
  },
  AddCat:function (){
    const cat = {title:this.newCat}


   if(this.newCat) {

     this.$addCategorie(cat).then(res => res.json()).then(data => {
       console.log(data )


       if( data.error)
         this.errorMessage=`la catégorie ${this.newCat}  existe dejà..`
       else{
           this.categories.push(data);
           this.successmessage=`Categorie ${this.newCat}  ajouté..`
            this.errorMessage="";
           this.newCat="";
            this.$fetch();
       }

     }).catch(err => {
       console.log(err)
     })
   }else{
       this.errorMessage="Catégorie obligatoire!!!"
       this.successmessage=""
   }



  },
    edit:function (){},
    deleted:function (cat){
     this.clear()
      const token = localStorage.getItem("token")
      this.successmessage=""
      this.$deleteCategorie(cat,token).then(res=>res.json()).then(data=>{
        this.successmessage = data.status
        this.categories = this.categories.filter( elt =>elt!=cat)
      }).catch( err=>{
        console.log( err )
      })

    ///console.log(cat)
    }
  },
  fetch(){
     this.$categories().then(res => res.json()).then((data)=>{
       console.log( data )
       this.categories = data.data
     }).catch(err=>{
       console.log( err )
     })
  }

}

</script>

<style scoped>

</style>
