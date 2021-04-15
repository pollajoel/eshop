<template>
<!-- component -->
<div class="min-w-screen min-h-screen bg-white-100 flex flex-col items-center justify-center pt-">
        <div class="w-5/6 lg:w-3/6 rounded-xl border mr-3 pt-6 pb-8">
            <div class="flex flex-col">
                <div id="header" class="flex flex-col items-center justify-center text-white py-4 bg-blue-800">
                    <div class="text-center uppercase text-2xl">Créer un compte</div>
                    <div class="text-sm">
                        <span class="hover:underline">( * ) Champs obligatoires</span>
                    </div>
                </div>
              <form>

                <div id="converters-area" class="px-4 py-5">
                  <div v-show="$store.state.isAdmin">
                    <input type="checkbox" name="isAdmin" v-model="isAdmin">
                    <label class="text-red-800"> Ajouter comme Administrateur ?</label>
                  </div>
                    <div class="flex flex-col ">
                        <div class="flex items-center justify-between mb-5">
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700">Nom (*)</label>
                                <input type="text"  class="border-2 rounded-sm py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600" v-model="name" name="name"/>
                            </div>
                            <div class="flex flex-col text-center w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700 text-left">Prenom (*)</label>
                                <input type="text" class="py-3 px-5 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" v-model="firstName" name ="firstName"/>
                            </div>
                        </div>

                        <div class="flex items-center justify-between mb-5">
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700">Tel (*)</label>
                                <input type="text"  class="py-3 px-5 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" name="phoneNumber" v-model="phoneNumber"/>
                            </div>
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700" for="height-feet">email(*)</label>
                                <input type="text" id="height-feet" class="py-3 px-5 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" name="email" v-model="email" />
                            </div>
                        </div>

                        <div class="flex items-center justify-between mb-5">
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700">Code postal</label>
                                <input type="text"  class="py-3 px-5 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" name="ZipCode"  v-model="ZipCode"/>
                            </div>
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700" for="height-feet">Adresse</label>
                                <input type="text" id="distance-miles" class="py-3 px-5 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" name="adresseFi" v-model="adresseFi" />
                            </div>
                        </div>

                        <div class="flex items-center justify-between mb-5">
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700">Ville</label>
                                <input type="text" class="py-3 px-5 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" name="city" v-model="city" />
                            </div>
                            <div class="flex flex-col text-left w-3/6 px-2">
                              <label class="mb-1 mb-1 text-sm font-medium text-gray-700" for="height-feet">pays</label>
                              <select class="py-3 px-5 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" v-model="country">
                                <option value=""> Selectionner un Pays</option>
                                <option v-for="ctr in countries"
                                        :key="ctr.name"
                                        :value="ctr.name"
                                >{{ ctr.name}}</option>
                              </select>
                            </div>
                        </div>

                      <div class="flex items-center justify-between mb-5">
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700">Mot de passe</label>
                                <input type="password" class="py-3 px-5 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" name="passWord" v-model="passWord" />
                            </div>
                            <div class="flex flex-col text-left w-3/6 px-2">
                                <label class="mb-1 mb-1 text-sm font-medium text-gray-700" for="height-feet">Confirmaton de mot de passe</label>
                                <input type="password" class="py-3 px-5 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" name ="confirmpassWord" v-model="confirmpassWord"/>
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
        <div class="text-sm mt-3">
            Rejoignez moi <a href="https://twitter.com/devgleb" class="text-blue-600 hover:underline" target="_blank">pollajoel2017@gmail.com</a>
        </div>
    </div>
</template>

<script>
import FormGroup from "@/components/ui/FormGroup";
import ErrorAlerte from "@/components/ui/errorAlerte";
import SuccesArlete from "@/components/ui/succesArlete";
import { mapMutations } from 'vuex';
import Countries from "@/pages/countries";


export default {
name: "register",
  components: {Countries, SuccesArlete, ErrorAlerte, FormGroup},

  computed: {
    todos () {
      return this.$store.state.auth;
    }
  },
  data:function (){
  return(
    {
      countries:[],
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
      isAdmin:false

    }
  )
  },
  mounted() {
  fetch("/api/countries",{
    method:"GET",
    headers:{"Content-type":"Application/json"}
  }).then(res=>res.json()).then(res=>{
    //console.log( res )
    this.countries = res.data
    //console.log( data );
  }).catch(err=>{ console.log(err)})
  },
  methods:{
  ClearForm(){

    this.city,
      this.country = "";
      this.ZipCode="";
      this.adresseFi="";
      this.name="";
      this.firstName="";
      this.passWord="";
      this.email="";
      this.phoneNumber="";
      this.civility="";
      this.isAdmin="";
  },
  register:function (){
    let userAdress = []
    userAdress.push({
      city:this.city,
      country:this.country,
      ZipCode:this.ZipCode,
      adressei:this.adresseFi
    })

    const body={
     name:this.name,
      firstName:this.firstName,
      passWord:this.passWord,
      email:this.email,
      adresse:userAdress,
      phoneNumber:this.phoneNumber,
      civility:this.civility,
      isAdmin:this.isAdmin,
    }


    if( !this.passWord || !this.email || !this.confirmpassWord || !this.firstName || !this.name)
    this.displayError="Veuillez renseigner les champs obligatoires"
    else {
      this.$register(body).then(res => res.json()).then(data => {
          console.log(data)
          this.successmessage = "Votre compte a été créé avec succès..."
          this.errorMessage = ""
          //this.$fetch();
          this.ClearForm();
        }
      ).catch(err => {
        console.log(err)
      })
    }
  },

  }
}
</script>

<style scoped>

</style>
