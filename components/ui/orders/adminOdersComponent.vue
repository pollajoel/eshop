<template>
<!-- component -->
<div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex">
        <h1 class="text-3xl">
            Commandes
        </h1>
    </div>
  <div>
    <div class="p-2" v-show="statusChange">
    <div class="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm">
      <span class="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">Status Change</span>
      <span class="inline-flex px-2">le status a été modifié</span>
    </div>
  </div>
  </div>
    <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
                <tr class="border-b">
                    <th class="text-left p-3 px-5">Numéro</th>
                    <th class="text-left p-3 px-5">produits</th>
                    <th class="text-left p-3 px-5">utilisateur</th>
                    <th class="text-left p-3 px-5" colspan="2">status</th>
                    <th class="text-left p-3 px-5">Montant total</th>
                    <th></th>
                </tr>
                <tr class="border-b hover:bg-orange-100 bg-gray-100" v-for="order in oders">
                    <td class="p-3 px-5"><input type="text" :value="order._id" class="bg-transparent" disabled="false"></td>
                    <td class="p-3 px-5"><input type="text" :value="order.products.length" class="bg-transparent"></td>
                    <td class="p-3 px-5"><input type="text" :value="order.user.email" class="bg-transparent"></td>
                    <td class="p-3 px-5"colspan="2" >
                       {{ order.status}}
                        <select value="user.role" class="bg-transparent" @change="Setstatus($event,order)" @click="statusOnclick" v-show="$store.state.isAdmin">
                          <option value="Modifier">Modifier</option>
                          <option value="user" v-for="state in status"
                                  :key="state.id"
                                  :value="state.value"
                          >{{ state.value }}</option>
                        </select>
                    </td>
                    <td class="p-3 px-5"><input type="text" :value="order.totalAmount" class="bg-transparent">eur</td>
                  <!--
                  <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Save</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                -->
                </tr>
            </tbody>
        </table>
    </div>
</div>

</template>

<script>
export default {
name: "adminOdersComponent",
  mounted() {
   let token = localStorage.getItem("token");
  this.$orders(token).then(res=>res.json()).then(res=>{

    console.log( res )

    if( this.$store.state.isAdmin===true) {
      this.oders = res.data;
    }else{
      var email = this.$store.state.email;
      if( res.data.length >0 )
      res.data.forEach(elt=>{
        //alert( elt.user.email );
        if( (elt.user.email) === email  )
        {this.oders.push(elt)}
      });



    }

  }).catch(err=>{
    console.log( err );
  })
  },
  methods:{

  statusOnclick(){
    this.statusChange = false;
  },
  Setstatus:function (stat,order){
     const state = { status: stat.target.value};
     ///this.statusChange = false;
    let token = localStorage.getItem("token");
    if( stat.target.value!=="Modifier"){
      this.$orderUpdate(order._id,state,token).then(res=>res.json()).then(res=>{
        this.statusChange=true;
        this.$fetch();

        //console.log( res);
      }).catch(err=>{console.log( err );})

    }
  }
  },
  data(){
  return{
    status:[{id:1,value:"livré"},{id:2,value:"En cours"},{id:3,value:"Terminé"}],
    oders:[],
    statusChange:false,
  }
  }
}
</script>

<style scoped>

</style>
