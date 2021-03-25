<template>
<div class="page__account">
  <AdminBar/>
  <div class="account__contain">
   <div class="py-3 px-5 mb-4 text-gray-900 rounded-md text-sm">
     <ul class="flex">
       <li><a href="#" class="underline font-semibold">Home</a></li>
       <li><span class="mx-2">/</span></li>
       <li><a href="#" class="underline font-semibold">Pages</a></li>
       <li><span class="mx-2">/</span></li>
       <li>Sample page</li>
     </ul>
   </div>


    <div class="min-w-screen min-h-screen bg-white-100 flex flex-col justify-left">
        <div class="w-5/6 lg:w-11/12 rounded-xl border mr-3 pt-6 pb-8">
            <div class="flex flex-col">
              <form>
                <div id="converters-area" class="px-4 py-5">
                    <div class="flex flex-col ">
                        <div class="flex items-center justify-between mb-5">
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700">Nom (*)</label>
                                <input type="text"  class="border-2 rounded-sm h-8 rounded focus:outline-none text-gray-600 focus:text-gray-600" v-model="name" name="name"/>
                            </div>
                            <div class="flex flex-col text-center w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700 text-left">Prenom (*)</label>
                                <input type="text" class="h-8 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" v-model="firstName" name ="firstName"/>
                            </div>
                        </div>

                        <div class="flex items-center justify-between mb-5">
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700">Tel (*)</label>
                                <input type="text"  class="h-8 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" name="phoneNumber" v-model="phoneNumber"/>
                            </div>
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700" for="height-feet">email(*)</label>
                                <input type="text" id="height-feet" class="h-8 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" name="email" v-model="email" />
                            </div>
                        </div>

                        <div class="flex items-center justify-between mb-5">
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700">Code postal</label>
                                <input type="text"  class="h-8 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" name="ZipCode"  v-model="ZipCode"/>
                            </div>
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700" for="height-feet">Adresse</label>
                                <input type="text"  class="h-8 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" name="adresseFi" v-model="adresseFi" />
                            </div>
                        </div>

                        <div class="flex items-center justify-between mb-5">
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700">Ville</label>
                                <input type="text" class="h-8 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" name="city" v-model="city" />
                            </div>
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700" for="height-feet">pays</label>
                                <input type="text" class="h-8 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" name ="country" v-model="country"/>
                            </div>
                        </div>

                      <div class="flex items-center justify-between mb-5">
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700">Mot de passe</label>
                                <input type="password" class="h-8 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" name="passWord" v-model="passWord" />
                            </div>
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700" for="height-feet">Confirmaton de mot de passe</label>
                                <input type="password" class="h-8 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600"  v-model="confirmpassWord" name="confirmpassWord"/>
                            </div>
                        </div>

                        <div class="flex items-center justify-center mt-3">
                            <div class="flex flex-col text-center w-2/3 px-2">
                                <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" @click.prevent="register">
                                   Valider mes informations
                                 </button>
                            </div>
                        </div>
                    </div>
                </div>
                 <succesArlete :successmessage="successmessage" v-if="successmessage"/>
                <ErrorAlerte :errormessage="displayError" v-if="displayError" />
              </form>
            </div>
        </div>
    </div>






  </div>


</div>
</template>

<script>
import AdminBar from "@/components/ui/AdminBar";
import Dropdown from "@/components/ui/dropdown";
export default {
  name: "account",
  components: {Dropdown, AdminBar},
  middleware:"auth",
  layout:"adminLayout",
  data:function (){
    return{
      user:{},
      isLogged:false,
       name:"",
      passWord: "",
      email:"",
      adresse: [],
      phoneNumber: "",
      civility:"",
      adresseFi:"",
      country:"",
      city:"",
      ZipCode:"",
      firstName: "",
      confirmpassWord:"",
      displayError:"",
      successmessage:"",
      userId:""
    }
  },
methods:{
    update:function (){
      alert( "update....")
    }
}
,
  fetch() {
    const token = localStorage.getItem("token")
    if( token ) {
      const jwtDecoded = this.$decodeJwt(token);
      this.$getMe(jwtDecoded.id, token)
        .then(res=>res.json()).then((data)=>{
          this.$store.commit('isAuth')
          this.$store.commit('setUserName',data.name)
          this.user = data;
          this.city = data.adresse[0].city;
          this.country = data.adresse[0].country;
          this.ZipCode = data.adresse[0].ZipCode;
          this.adresseFi = data.adresse[0].adressei;
          this.isLogged = true;
          localStorage.setItem("name",data.name)

         this.passWord = data.passWord;
         this.firstName = data.firstName;
         this.name= data.name;
         this.confirmpassWord = data.passWord;
         this.email= data.email;
         this.phoneNumber = data.phoneNumber;




      }).catch(err=>{
        console.log( err )
      })
    }
  }
}
</script>


<style scoped>
.page__account{display: flex;}
.account__contain{width: 70%}

</style>
