<template>
<div>
  <h1>
    Bonjour Joel, Bienvenu sur votre compte {{ user.name }}
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
          console.log( data )
          this.user = data;
        this.isLogged = true;
          console.log( data )
          console.log( this.$store.state.auth)
      }).catch(err=>{
        console.log( err )
      })
    }
  }
}
</script>


<style scoped>

</style>
