<template>
  <select class="py-3 px-5 border-2 rounded-sm focus:outline-none text-gray-600 focus:text-gray-600" v-model="selectC">
    <option> Selectionner un Pays</option>
    <option v-for="country in countries"
            :key="country.name"
            :value="country.name"
    >{{ country.name}}</option>
  </select>
</template>

<script>
export default {
name: "countries",

  props:{
  selectC:{
    type:String,
  }
  },
  data:function (){
  return{
    countries:[]
  }
  },
  mounted(){
  fetch("/api/countries",{
    method:"GET",
    headers:{"Content-type":"Application/json"}
  }).then(res=>res.json()).then(res=>{
    //console.log( res )
    this.countries = res.data
    //console.log( data );
  }).catch(err=>{ console.log(err)})

  }

}
</script>


<style scoped>

</style>
