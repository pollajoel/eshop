<template>
  <div class="min-w-screen min-h-screen bg-white-100 flex flex-col items-center justify-center">
  <div class="login__form w-1/3 lg:w-1/3 rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 mr-3">
    <form class="border p-10 mt-20 mb-20 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
       <label class="block text-sm font-medium text-gray-700">login *</label>
      <input type="text" class=" py-3 px-5 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600 w-full" :name="login" v-model="login"/>
      <label class="block text-sm font-medium text-gray-700">Mot de passe *</label>
      <input type="password" class="py-3 px-5 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600 w-full" :name="password" v-model="password"/>
      <div class="flex items-center justify-between mt-3">
        <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" @click.prevent="SingIn">
        Connexion
        </button>
        <NuxtLink class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="forgetpassword">
          Mot de passe oublié ?
        </NuxtLink>
      </div>
      <ErrorAlerte :errormessage="errorMessage" v-if="errorMessage"/>
    </form>
  </div>
    </div>
</template>

<script>
import FormGroup from "@/components/ui/FormGroup";
import ErrorAlerte from "@/components/ui/errorAlerte";
export default {
name: "LoginForm",
  components: {ErrorAlerte, FormGroup},
  data:function (){
  return{
    errorMessage:"",
    login:"",
    password:""
  }
},
  methods:{
  SingIn:function (){
      const body ={
        passWord:this.password,
        email:this.login
      }
      if( !this.password || !this.login)
        this.errorMessage="login et mot de passe requis"
      else {
        this.$login(body).then(res => res.json()).then((data) => {
          this.$store.commit('isAuth')
          let token = data.accessToken;
          localStorage.setItem('token',token);
           this.$router.push("account")
        }).catch(err => {
          console.log(err)
        })
      }





    //alert("Bonjour");
  }
  }




}
</script>

<style scoped>

</style>
