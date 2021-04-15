<template>
<div>
  <table class="border-collapse w-full mt-12" v-show="Users">
    <thead>
        <tr>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Nom</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Prenom</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">email</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
        </tr>
    </thead>
    <tbody>
        <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0" v-for="userdata in Users" :key="userdata._id">
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{{userdata.name}}</span>
               {{userdata.name}}
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
               {{userdata.firstName}}
            </td>
          	<td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
              {{ userdata.email}}
          	</td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>
                <a href="#" class="text-blue-400 hover:text-blue-600 underline" @click.prevent="edit(userdata)">Editer</a>
                <a href="#" class="text-blue-400 hover:text-blue-600 underline pl-6" @click.prevent="deleted(userdata)">Supprimer</a>
            </td>
        </tr>
      <tr><td><successmessage :successmessage="successmessage"/></td></tr>

    </tbody>
</table>
<UserForm :user="user" v-show="editState"/>

</div>


</template>

<script>
import categories from "@/pages/categories";
import ErrorAlerte from "@/components/ui/errorAlerte";
import SuccesArlete from "@/components/ui/succesArlete";
import UserForm from "@/components/ui/admin/userForm";

export default {
name: "adminUserComponent",
  middleware:"auth",
  components: {UserForm, ErrorAlerte,SuccesArlete},
  layout:"adminLayout",
  data:function (){
  return{
      Users:[],
      newCat:"",
      errorMessage:"",
      successmessage:"",
      user:{name:"polla",email:"pollajoel2017@gmail.com"},
      editState:false
  }
  },
  methods:{
  clear:function (){
    this.errorMessage="";

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
    edit:function (user){
    this.editState = true;
    this.user =user;
    //console.log( user)
    },
    deleted:function (userInput){

      //console.log( userInput )
      const token = localStorage.getItem("token")
      //console.log( userInput._id)
      const usertodelete={_id:userInput._id}

      this.$deleteUser(usertodelete,token).then(res=>res.json()).then(data=>{

        this.Users = this.Users.filter( elt =>elt!=userInput)
        this.successmessage=`utilisateur supprimé...`
      }).catch( err=>{
        console.log( err )
      })

    ///console.log(cat)
    }
  },
  mounted(){
      let token = localStorage.getItem("token")
     this.$getUsers(token).then(res => res.json()).then((data)=>{
       this.Users = data.data
     }).catch(err=>{
       console.log( err )
     })
  }

}

</script>

<style scoped>

</style>

