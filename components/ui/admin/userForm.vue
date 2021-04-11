<template>
<!-- component -->
    <div class="bg-gray-200 min-h-screen pt-2 font-mono my-16">
        <div class="container mx-auto">

            <div class="inputs w-full max-w-2xl p-6 mx-auto">
                <h2 class="text-2xl text-gray-900">Modifier le compte</h2>
                <form class="mt-6 border-t border-gray-400 pt-4">
                    <div class='flex flex-wrap -mx-3 mb-6'>
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left' for='grid-text-1'>adresse email</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' id='grid-text-1' type='text' placeholder='Enter email' v-model="user.email" required>
                        </div>
                      <div class='w-full md:w-full px-3 mb-6' v-show="showPassword">
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left' for='grid-text-1'>Mot de passe</label>
                            <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500'  type='password' placeholder='nouveau mot de passe' v-model="user.passWord" required>
                        </div>
                        <div class='w-full md:w-full px-3 mb-6 '>
                            <button class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md " @click.prevent="Show">Modifier le mot de passe ?</button>
                        </div>
                      <!--
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>pick your country</label>
                            <div class="flex-shrink w-full inline-block relative">
                                <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                    <option>choose ...</option>
                                    <option>USA</option>
                                    <option>France</option>
                                    <option>Spain</option>
                                    <option>UK</option>
                                </select>
                                <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div class='w-full md:w-full px-3 mb-6'>
                            <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>fav language</label>
                            <div class="flex-shrink w-full inline-block relative">
                                <select class="block appearance-none text-gray-600 w-full bg-white border border-gray-400 shadow-inner px-4 py-2 pr-8 rounded">
                                    <option>choose ...</option>
                                    <option>English</option>
                                    <option>France</option>
                                    <option>Spanish</option>
                                </select>
                                <div class="pointer-events-none absolute top-0 mt-3  right-0 flex items-center px-2 text-gray-600">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        -->

                        <div class="personal w-full border-t border-gray-400 pt-4">
                            <h2 class="text-2xl text-gray-900">Informations personnelles:</h2>
                            <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left' >nom</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' v-model="user.name" required>
                                </div>
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left' >prenom</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' v-model="user.firstName" type='text'  required>
                                </div>
                            </div>
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left'>Tel</label>
                                <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' v-model="user.phoneNumber"  required>
                            </div>
                          <div v-for="adr in user.adresse">
                          <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left' >Code postal</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' v-model="adr.ZipCode" required>
                                </div>
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left' >adresse</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' v-model="adr.adressei" type='text'  required>
                                </div>
                            </div>
                          <div class="flex items-center justify-between mt-4">
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left'>Ville</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text'  v-model="adr.city" required>
                                </div>
                                <div class='w-full md:w-1/2 px-3 mb-6'>
                                    <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-left' >Pays</label>
                                    <input class='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' type='text' v-model="adr.country"  required>
                                </div>
                          </div></div>


                          <!--
                            <div class='w-full md:w-full px-3 mb-6'>
                                <label class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                                <textarea class='bg-gray-100 rounded-md border leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'  required></textarea>
                            </div>
                            -->
                            <div class="flex justify-end">
                                <button class="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit" @click.prevent="submitdata">Enregister les modifications</button>
                            </div>
                          <div>
                            <succes-arlete successmessage="informations utilisateurs mis à jours..." v-show="state"/>
                          </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
import SuccesArlete from "@/components/ui/succesArlete";
export default {
name: "userForm",
  components: {SuccesArlete},
  middleware:"auth",
  props:{
  user:{
    name :{type:String,},
    email:{type:String},
    firstName:{type:String},
    passWord:{type:String},
    adresse:[
      { city: { type:String,},
        country:{ type:String},
        ZipCode:{ type:String},
        adressei:{type:String}
      }]
  }
},
  data:function (){
  return{
    showPassword:false,
    state:false,
  }
  },
  methods:{
  Show:function (){
    if( this.showPassword === true)
      this.showPassword=false;
    else
      this.showPassword=true;
  },
    submitdata(){
    this.state=false;
    let userAdress = []
      userAdress.push({
        city:this.user.city,
        country:this.user.country,
        ZipCode:this.user.ZipCode,
        adressei:this.user.adresseFi
      })

      const body={
        name:this.user.name,
        firstName:this.user.firstName,
        passWord:this.user.passWord,
        email:this.user.email,
        adresse:this.userAdress,
        phoneNumber:this.user.phoneNumber,
        civility:this.user.civility,
        isAdmin:true,
      }

      let token = localStorage.getItem("token")
      this.$updateuser(this.user._id,body,token).then(res=>res.json()).then(data=>{
        console.log( data )
        //this.email = data.res.email;
        if( data )
          this.state = data.status;
        //this.$fetch();
      }).catch(err=>{
        console.log( err );
      })


  },
  }

}
</script>

<style scoped>

</style>
