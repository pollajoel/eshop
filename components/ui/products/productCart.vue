<template>
<!-- component -->
    <div v-if="products.length>0 && products" :key="componentKey">
      <div class="flex justify-center my-6">
        <div class="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
          <div class="flex-1">
            <table class="w-full text-sm lg:text-base" cellspacing="0">
              <thead>
              <tr class="h-12 uppercase">
                <th class="hidden md:table-cell"></th>
                <th class="text-left">Produit</th>
                <th class="lg:text-right text-left pl-5 lg:pl-0">
                  <span class="lg:hidden" title="Quantity">Qte</span>
                  <span class="hidden lg:inline">Quantité</span>
                </th>
                <th class="hidden text-right md:table-cell">Prix unitaire</th>
                <th class="text-right">prix total</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="product in products" :key="product._id">
                <td class="hidden pb-4 md:table-cell">
                  <a href="#">
                    <img :src="product.product.imgurl.url" class="w-20 rounded" alt="Thumbnail">
                  </a>
                </td>
                <td>
                  <a href="#">
                    <p class="mb-2 md:ml-4">{{ product.product.name}}</p>
                    <form action="" method="POST">
                      <button type="submit" class="text-gray-700 md:ml-4" @click.prevent="removeFromCart(product)">
                        <small>(Supprimer)</small>
                      </button>
                    </form>
                  </a>
                </td>
                <td class="justify-center md:justify-end md:flex mt-6">
                  <div class="w-20 h-10">
                    <div class="relative flex flex-row w-full h-8">
                      <input type="number"  v-model="product.qte"  @change="SetQte" min="1" class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                    </div>
                  </div>
                </td>
                <td class="hidden text-right md:table-cell">
                  <span class="text-sm lg:text-base font-medium">
                    {{ product.product.price }}€
                  </span>
                </td>
                <td class="text-right">
                  <span class="text-sm lg:text-base font-medium">
                    {{ product.product.price*product.qte }}€
                  </span>
                </td>
              </tr>
              </tbody>
            </table>

            <div class="my-4 mt-6 -mx-2 lg:flex" v-show="$store.state.auth===false">
              <div class="lg:px-2 lg:w-1/2">
                <div class="p-4 bg-gray-100 rounded-full">
                  <h1 class="ml-2 font-bold uppercase"><NuxtLink to="login">Déjà client? vous connecter</NuxtLink></h1>
                </div>
              </div>
              <div class="lg:px-2 lg:w-1/2">
                <div class="p-4 bg-gray-100 rounded-full">
                  <h1 class="ml-2 font-bold uppercase"><nuxt-link to="register">Créer un compte?</nuxt-link></h1>
                </div>
              </div>
            </div>


            <error-alerte :errormessage="user.errormessage" v-if="user.errormessage"/>
            <hr class="pb-6 mt-6">
            <div class="my-4 mt-6 -mx-2 lg:flex" v-show="$store.state.auth">
              <div class="lg:px-2 lg:w-1/2">
                <div class="p-4 bg-gray-100 rounded-full">
                  <h1 class="ml-2 font-bold uppercase">Adresse de facturation</h1>
                </div>

                <div class="form__group">
                  <div>
                    <p class="mb-4 italic">Nom(*)</p>
                    <input v-model="user.name" type="text" name="nom" class="w-full h-8 p-2 bg-gray-100 rounded"  required>
                  </div>
                  <div>
                    <p class="mb-4 italic">Prenom(*)</p>
                    <input type="text" v-model="user.firstName" name="prenom" class="w-full h-8 p-2 bg-gray-100 rounded" required>
                  </div>
                </div>

                <div class="form__group">
                  <div>
                    <p class="mb-4 italic">Tel(*)</p>
                    <input type="text" v-model="user.phoneNumber" name="phoneNumber" class="w-full h-8 p-2 bg-gray-100 rounded" required>
                  </div>
                  <div>
                    <p class="mb-4 italic">Email(*)</p>
                    <input type="text" v-model="user.email" name="email" class="w-full h-8 p-2 bg-gray-100 rounded" required>
                  </div>
                </div>

                <div class="form__group">
                  <div>
                    <p class="mb-4 italic">Code postal</p>
                    <input v-model="user.ZipCode" type="text" name="ZipCode" class="w-full h-8 p-2 bg-gray-100 rounded">
                  </div>
                  <div class="form__group">
                    <p class="mb-4 italic">Adresse(*)</p>
                    <input v-model="user.adresse" type="text" name="adresse" class="w-full h-8 p-2 bg-gray-100 rounded">
                  </div>
                </div>

                <div class="form__group">
                  <div>
                    <p class="mb-4 italic">ville</p>
                    <input v-model="user.city" type="text" name="city" class="w-full h-8 p-2 bg-gray-100 rounded">
                  </div>
                  <div>
                    <p class="mb-4 italic">Pays</p>
                    <input type="text" v-model="user.country" name="nom" class="w-full h-8 p-2 bg-gray-100 rounded">
                  </div>
                </div>

                <div class="p-4">
                  <p class="mb-4 italic">Si vous avez des informations pour le vendeur, vous pouvez les laisser dans la case ci-dessous</p>
                  <textarea class="w-full h-24 p-2 bg-gray-100 rounded" name="suggestions"></textarea>
                </div>
              </div>
        <div class="lg:px-2 lg:w-1/2">
          <div class="p-4 bg-gray-100 rounded-full">
            <h1 class="ml-2 font-bold uppercase">Details de la Commande</h1>
          </div>
          <div class="p-4">
            <p class="mb-6 italic">
              Les frais d'expédition et supplémentaires sont calculés en fonction des valeurs que vous avez saisies
            </p>
              <div class="flex justify-between border-b">
                <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                  Sous -Total
                </div>
                <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                  {{ Total }} €
                </div>
              </div>
                <!--
                <div class="flex justify-between pt-4 border-b">

                  <div class="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                    <form action="" method="POST">
                      <button type="submit" class="mr-2 mt-1 lg:mt-2">
                        <svg aria-hidden="true" data-prefix="far" data-icon="trash-alt" class="w-4 text-red-600 hover:text-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"/></svg>
                      </button>
                    </form>
                    Coupon "90off"
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                    -133,944.77€
                  </div>
                </div>

                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    New Subtotal
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    14,882.75€
                  </div>
                </div>

                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Tax
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    2,976.55€
                  </div>
                </div>
                -->



                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Total
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    {{ Total }} €
                  </div>
                </div>
            <stripe-checkout :mode ="mode" :pk="pk" :lineItems="items" :successUrl="successUrl" :cancelUrl="cancelUrl" ref="checkoutRef" @loading="v => loading = v"/>

              <a href="#">
                <button class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none" @click="checkout">
                  <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" class="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
                  <span class="ml-2 mt-5px">Commander</span>
                </button>
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
   <div class="-m-2 text-center my-20" v-else>
  <div class="p-2">
    <div class="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm">
      <span class="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">état du panier</span>
      <span class="inline-flex px-2">Votre Panier panier est vide................</span>
    </div>
  </div>
   </div>

</template>

<script>
import Stripe from 'stripe';
import {loadStripe } from "@stripe/stripe-js"
import Index from "@/pages/index";
import ErrorAlerte from "@/components/ui/errorAlerte";
export default {
name: "productCart",
  components: {ErrorAlerte, Index},


  data:function (){

  return{
    user:{
      name:"",
      passWord: "",
      email:"",
      adresse: "",
      phoneNumber: "",
      civility:"",
      adresseFi:"",
      country:"",
      city:"",
      ZipCode:"",
      firstName:"",
      confirmpassWord:"xxxxxxxx",
      displayError:"",
      errormessage:"",
      isAdmin:false
    },
    pk :process.env.STRIPE_PK,
    products:[],
    Total:0,
    sessions:{},
    componentKey: 0,
    items: [
        {
          quantity: 1,
        },
      ],
    successUrl: 'http://localhost:3000',
    cancelUrl: 'http://localhost:3000',
    mode:'payment',

  }
  },
  mounted() {
  this.user ={name:this.$store.state.name,
      email:this.$store.state.email,
      adresse:this.$store.state.adresseFi,
      phoneNumber:this.$store.state.phone,
      civility:"",
      adresseFi:this.$store.state.adresseFi,
      country:this.$store.state.country,
      city:this.$store.state.city,
      ZipCode:this.$store.state.ZipCode,
      firstName:this.$store.state.firstName,

  }

   if(JSON.parse(localStorage.getItem("cart"))){
    this.products = JSON.parse(localStorage.getItem("cart"));
    this.products.forEach(prod => {
      this.Total += prod.product.price;
    })
  }

  //console.log( this.products )
  },

  methods:{

    setsession:function (data){
      let pk = process.env.STRIPE_PUBLIC;
       const stripeInit = loadStripe(pk) // returns a promis


      stripeInit.then(stripe => {
        //ssalert( data.res.id )
      stripe.redirectToCheckout({
        sessionId: data.res.id
      }).then(function(result) {
        //console.log(result);
      }).catch(function(error) {
        //console.error(error);
      });
    })
    },
    AddOrder(){

      const ordersvar = []
      this.products.forEach(prod=>{ ordersvar.push(prod.product)});
      const Order = {
        totalAmount:this.Total,
        user:this.$store.state._id,
        products:ordersvar,
         status:"En cours"
        }

      let token = localStorage.getItem("token");
      this.$orderAdd(Order,token).then(res=>res.json()).then(res=>{
        //console.log( res )
        localStorage.removeItem("cart")
      }).catch(err=>{ console.log( err )})
    },
    createdUser(){
      let userAdress = []
    userAdress.push({
      city:this.user.city,
      country:this.user.country,
      ZipCode:this.user.ZipCode,
      adressei:this.user.adresseFi
    })
    const body={
        name:this.name,
      firstName:this.user.firstName,
      passWord:this.user.passWord,
      email:this.user.email,
      adresse:this.useruserAdress,
      phoneNumber:this.user.phoneNumber,
      civility:this.user.civility,
      isAdmin:this.user.isAdmin,
    }


    this.$register(body).then(res => res.json()).then(data => {
          //console.log(data)
          this.user.errormessage = data.message;
          //this.successmessage = "Votre compte a été créé avec succès..."
          //this.errorMessage = ""

        }
      ).catch(err => {
        console.log(err)
      })




    },
    checkout:function (){
      //alert(this.pk)
      //this.$refs.checkoutRef.redirectT
      var pk = process.env.STRIPE_PUBLIC
      var stripe = Stripe(pk);
       const data2 = { "email":this.email,"price":this.Total*100};
      fetch("/api/stripePay", {
         method: "POST",
         headers: {"Content-type":"Application/json"},
         body:JSON.stringify(data2),
       }).then(response=> {
         return response.json();
       }).then(session=> {
          console.log( session )
        this.AddOrder();
         if( session )
           this.setsession(session)
       }).catch(err=>{console.log( err )})
    },
  SetQte:function (event){
   this.Total=0;

   this.products.forEach(prod=>{
     const price = prod.product.price;
     const qte = prod.qte;
     const total = price*qte;
     this.Total = this.Total+total;
   })


  },
  removeFromCart:function (product){
    var cart =[];
       if( localStorage.getItem("cart"))
         cart = JSON.parse(localStorage.getItem("cart"));
       cart = cart.filter(prod=>prod.product._id!=product.product._id);
       this.products = cart;
       localStorage.setItem('cart',JSON.stringify(cart));
    }
}

}
</script>

<style scoped>

</style>
