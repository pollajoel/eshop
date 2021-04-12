<template>
<div>
  <div class="w-full flex flex-wrap ml-12 pb-10 pt-10 justify-left">
          <div class="w-auto p-2"  v-for="product in products" :key="product._id">
            <div class="bg-white shadow-lg hover:shadow-xl rounded-lg" style="width:300px;">
              <div class="bg-gray-400 h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover" :style="{'background-image': 'url('+product.imgurl.url+')'}">
                <div class="text-right">
                  <button class="text-gray-300  p-2 rounded-full" :style="{backgroundColor: 'rgba(0,0,0,0.3)',color:'red'}" @click.prevent="HandleFavoris(product)">
                    <svg class="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="flex justify-between items-start px-2 pt-2">
                <div class="p-2 flex-grow">
                  <h1 class="font-medium text-xl font-poppins">{{product.name}}</h1>
                  <p class="text-gray-500 font-nunito">{{ product.description}}</p>
                </div>
                <div class="p-2 text-right">
                  <div class="text-teal-500 font-semibold text-lg font-poppins">€{{ product.price}}</div>
                  <!-- <div class="text-xs text-gray-500 line-through font-poppins">$80</div> -->
                </div>
              </div>
              <div class="flex justify-center items-center px-2 pb-2">
                <div class="w-1/2 p-2">
                  <button class="block w-full bg-white hover:bg-gray-100  border-2 border-teal-500 px-3 py-2 rounded uppercase font-poppins font-medium text-xs" @click.prevent="addToCart(product)">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
</div>

</template>

<script>
import SeachBar from "@/components/ui/products/seachBar";
export default {
  name: "popularProduct",
  components: {SeachBar},
  data:function (){
    return{
      products:[],
      isFavoris:[]
    }
},
  mounted(){
     this.$products().then(res=>res.json()).then(res=>{
        //console.log( res.data )
        this.products = res.data;

        this.products.forEach(prod=>{
          this.isFavoris.push({produit:prod,isFavoris: '#fff'})
        })

     })
  },

  fetch(){
      this.$products().then(res=>res.json()).then(res=>{
        ///console.log( res.data )
        this.products = res.data;
      })
  },
  methods:{
    HandleFavoris:function (product){
      //console.log( product )


       var favorites =[];

       if( localStorage.getItem("favorites"))
         favorites = JSON.parse(localStorage.getItem("favorites"));
       else
         favorites = [];

      const isPresent = favorites.map(e=>e.product._id).indexOf(product._id);

       if( isPresent === -1) {
         favorites.push({product: product, qte: 1});
       }
      localStorage.setItem('favorites',JSON.stringify(favorites))


    },
    addToCart:function (product){
      var cart =[];

       if( localStorage.getItem("cart"))
         cart = JSON.parse(localStorage.getItem("cart"));
       else
         cart = []

      const isPresent = cart.map(e=>e.product._id).indexOf(product._id);

       if( isPresent === -1)
         cart.push({product:product,qte:1});
      localStorage.setItem('cart',JSON.stringify(cart))
    }
  }
}
</script>

<style scoped>

</style>
