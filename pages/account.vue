<template>
<div>
  <h1>
    Bonjour Joel, Bienvenu sur votre compte {{ user.name }}
    <NuxtLink to="/"> go to home</NuxtLink>
  </h1>
</div>
</template>

<script>
export default {
  name: "account",
  middleware:"auth",
  layout:"adminLayout",
  data:function (){
    return{
      user:{},
      isLogged:false,
    }
  },
  fetch() {
    const token = localStorage.getItem("token")
    if( token ) {
      const jwtDecoded = this.$decodeJwt(token);
      this.$getMe(jwtDecoded.id, token)
        .then(res=>res.json()).then((data)=>{
          this.$store.commit('isAuth')
          this.$store.commit('setUserName',data.name)
          this.user = data;
          console.log( data )
          this.isLogged = true;
          localStorage.setItem("name",data.name)


      }).catch(err=>{
        console.log( err )
      })
    }
  }
}
</script>


<style scoped>

</style>
