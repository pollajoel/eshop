<template>

  <div class="px-4 pt-3 pb-4 border-b -mx-4 border-gray-400 mb-20">
            <div class="max-w-xl mx-auto" v-show="generer">
                <h2 class="text-xl text-left inline-block font-semibold text-gray-800">Reinitialiser mon mot de passe?</h2>
                <p class="text-gray-700 text-xs pl-px">
                    pour regénerer votre mot de passe veuillez renseigner votre adresse email
                </p>
                <form  class="mt-2">
                    <div class="flex items-center">
                        <input type="email" class="w-full px-2 py-4 mr-2  bg-gray-100 shadow-inner rounded-md border border-gray-400 focus:outline-none" v-model="email" required>
                        <button class="bg-blue-600 text-gray-200 px-5 py-2 rounded shadow"  style="margin-left: -7.8rem;" @click.prevent="SerarchByemail">Valider</button>
                     </div>
                   <p class="text-gray-700 text-xs pl-px" v-show="noAccount">Cette adresse ne correspond a aucun compte.</p>
                </form>
            </div>
    <div class="max-w-xl mx-auto" v-show="!generer">
      <h2 class="text-xl text-left inline-block font-semibold text-gray-800" v-show="auth==false">Reinitialiser mon mot de passe?</h2>
      <p class="text-gray-700 text-xs pl-px" v-show="auth==false">Veuillez saisir votre nouveau mot de passe ici</p>
      <form  class="mt-2">
        <div class="flex items-center"  v-show="auth==false">
          <input type="password" class="w-full px-2 py-4 mr-2  bg-gray-100 shadow-inner rounded-md border border-gray-400 focus:outline-none"   v-model="newPassword" required>
          <button class="bg-blue-600 text-gray-200 px-5 py-2 rounded shadow"  style="margin-left: -7.8rem;" @click.prevent="GeneratePassword">Valider</button>
        </div>
        <h2 class="text-gray-700 text-xl pl-px" v-show="auth"> Votre mot de passe a été réinitialisé avec succès...</h2>
      </form>
    </div>
  </div>

</template>

<script>
export default {
  name: "forgetpassword",
  methods:{

    GeneratePassword(){
      const user={passWord:this.newPassword}
      let token =""
      this.$updateuser(this.id,user,token).then( res =>res.json()).then(
        res =>{ this.auth=res.auth}
      ).catch(err=>{console.lo( err )})

    },
    SerarchByemail(){
      this.$Userfind(this.email).then(res=>res.json()).then(res=>{

        this.id = res[0]._id;
        if(this.id)
          this.generer = false;
        else{
          this.noAccount = true;
        }
      }).catch(err=>{
        console.log( err )
      })
    }
  },
  data(){
    return{
      noAccount:false,
      newPassword:"",
      id:"",
      email:"",
      generer:true,
      auth:false
    }
  }
}
</script>

<style scoped>

</style>
