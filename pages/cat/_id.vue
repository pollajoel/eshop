<template>
  <div class="cat__template">
<div class="w-full flex flex-wrap ml-12 pb-10 pt-10 justify-left" v-if="products.length > 0">
          <div class="w-auto p-2"  v-for="product in products" :key="product._id">
            <div class="bg-white shadow-lg hover:shadow-xl rounded-lg" style="width:300px;">
              <div class="bg-gray-400 h-64 rounded-t-lg p-4 bg-no-repeat bg-center bg-cover" :style="{'background-image': 'url('+product.imgurl.url+')'}">
                <div class="text-right">
                  <button class="text-gray-300 hover:text-pink-500 p-2 rounded-full" style="background: rgba(0,0,0,0.3)" @click.prevent="HandleFavoris(product)">
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
                <!--
                <div class="w-1/2 p-2">
                  <button class="block w-full bg-teal-500 hover:bg-teal-600 text-white border-2 border-teal-500 hover:border-teal-600 px-3 py-2 rounded uppercase font-poppins font-medium text-xs">
                    <svg viewBox="0 0 24 24" class="inline w-4 h-4">
                      <path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                    </svg> Details
                  </button>
                </div>
                -->
                <div class="w-1/2 p-2">
                  <button class="block w-full bg-white hover:bg-gray-100  border-2 border-teal-500 px-3 py-2 rounded uppercase font-poppins font-medium text-xs" @click.prevent="addToCart(product)">
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          </div>
</div>
  <div class="-m-2 text-center my-20" v-else>
  <div class="p-2">
    <div class="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm">
      <span class="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">status</span>
      <span class="inline-flex px-2">Cette catégorie ne contient aucun produits</span>
    </div>
  </div>
   </div>
    </div>
</template>

<script>
export default {
  name: "id",
  data:function (){
    return{
      id:this.$route.params.id,
      products:[]
    }
  },
  methods: {
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
      localStorage.setItem('favorites',JSON.stringify(favorites));
    },
    addToCart: function (product) {
      var cart = [];

      if (localStorage.getItem("cart"))
        cart = JSON.parse(localStorage.getItem("cart"));
      else
        cart = []

      const isPresent = cart.map(e => e.product._id).indexOf(product._id);

      if (isPresent === -1)
        cart.push({product: product, qte: 1});
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  },
mounted(){
    this.$products().then(res=>res.json()).then(res=>{
        this.products= res.data.filter(product=>product.categorie._id=== this.id);
    })
}
}
</script>

<style scoped>

</style>
