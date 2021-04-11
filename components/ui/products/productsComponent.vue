<template>
<!-- component -->
<div class="text-gray-900 bg-gray-200">
    <div class="p-4 flex">
        <h1 class="text-3xl">
            produits
        </h1>
    </div>
  <ErrorAlerte :errormessage="errormessage" v-show="errormessage"/>
<div class="px-3 py-4 flex justify-center">
   <table class="w-full text-md bg-white shadow-md rounded mb-4">
         <tbody>
          <tr class="border-b hover:bg-orange-100 bg-gray-100">
            <td class="p-3 px-5"><input type="text" placeholder="titre" v-model="product.name"></td>
            <td class="p-3 px-5"> <textarea class="w-full h-24 p-2 bg-transparent rounded" name="description" v-model="product.description" placeholder="description de votre produit"></textarea></td>
            <td class="p-3 px-5"><input type="number" min="1" placeholder="prix hors taxe" v-model="product.price"></td>
            <td class="p-3 px-5">
              <select value="user.role" class="bg-transparent rounded-md border-2" v-model="product.categorie">
                 <option value="Add">Catégorie</option>
                 <option  v-for="cat in categories" v-model="cat._id" :key="cat._id" :value="cat._id">{{ cat.title}}</option>
              </select>
            </td>
            <td class="p-3 px-5"><input type="file"  accept="image/jpeg, image/png" v-on:change="AddImage" v-bind="productImage" name="productImage(event)" required></td>
            <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" @click.prevent="AddProduct">Ajouter</button></td>
          </tr>
         </tbody>
       </table>
</div>
  <div>
    <succes-arlete successmessage="produit mis à jour avec succès ..." v-if="state"/>
  </div>

    <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
                <tr class="border-b">
                  <th class="text-left p-3 px-5">Titre</th>
                  <th class="text-left p-3 px-5">Description</th>
                  <th class="text-left p-3 px-5">prix</th>
                  <th class="text-left p-3 px-5">image</th>
                  <th class="text-left p-3 px-5">catégorie</th>
                  <th></th>
                </tr>
                <tr class="border-b hover:bg-orange-100 bg-gray-100 " v-for="product in products" :key="product._id">
                    <td class="p-3 px-5"><input type="text" name="name" class="bg-transparent" v-model="product.name"></td>
                    <td class="p-3 px-5">
                      <textarea class="w-full h-24 p-2 bg-transparent rounded" name="description" v-model="product.description"></textarea>
                    <td class="p-3 px-5"><input type="text" name="price" class="bg-transparent" v-model="product.price">€</td>
                    <td class="p-3 px-5"><img class="bg-transparent h-10" :src="product.imgurl.url"></td>
                    <td class="p-3 px-5">
                        <select value="user.role" class="bg-transparent border rounded-md">
                            <option value="user" v-for="cat in categories"
                                     :key="cat._id"
                                     :value="cat._id">{{ cat.title}}
                            </option>
                        </select>
                    </td>
                    <td class="p-3 px-5 flex justify-end"><button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" @click="ProductUpdate(product)">Enreg</button><button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline" @click.prevent="deleted(product)">Suppr</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
import ErrorAlerte from "@/components/ui/errorAlerte";
import products from "@/pages/products";
import SuccesArlete from "@/components/ui/succesArlete";
export default {
  name: "productsComponent",
  components: {SuccesArlete, ErrorAlerte},
  middleware:"auth",
  data: function () {
    return{
      categories:[],
      product:{name:'',description:'',categorie:'',image:'',price:'',imgurl:''},
      errormessage:"",
      products:[],
      productImage:"",
      state:false
    }
  },
  methods:{
    AddImage(event){
      const fileInput = event.target.files;
      const filepath  = event.target.value;
      this.$upload(fileInput,filepath).then(res=>res.json()).then((response=>{
        this.productImage=response.data._id;
      })).catch(err=>{
        console.log( err )
      })
    },
  deleted:function (data){

      this.products=this.products.filter(product=>product!=data)
      const token = localStorage.getItem("token")
      this.$productdeleted(data,token).then(res=>res.json()).then(
        data=>{
          console.log( data )
        }
      ).catch(err=>{
        console.log( err )
      })
  }
  ,
  ProductUpdate(product){
       let token = localStorage.getItem("token");
       this.state = false;
       const productToupdate = {
          name:product.name,
          description:product.description,
          //categorie:product.categorie,
          image:product.image,
          price:product.price,
          imgurl:product.productImage
       }

       //console.log( productToupdate )

       this.$productupdate(product._id,productToupdate,token).then(res=>res.json()).then(data=>{
         //console.log( data );
         this.state =true;
       }).catch(err=>{
         console.log( err );
       })
  },
    AddProduct:function (){
      const product={
          name:this.product.name,
          description:this.product.description,
          categorie:this.product.categorie,
          image:this.product.image,
          price:this.product.price,
          imgurl:this.productImage
      }

     if( this.productImage) {
       const token = localStorage.getItem("token")
       this.$Addproduct(product, token).then(res => res.json()).then(data => {
         console.log(data)
         if (data.created === false)
           this.errormessage = data.message
         else
           this.products.push(data.data)
         this.$fetch();
       }).catch(err => {
         console.log(err)
         this.errormessage = err.message
       })
     }else{
       this.errormessage="Champ image obligatoire ..."
     }


    }
  },
  fetch(){
    this.$categories().then(res => res.json()).then((data)=>{
        this.categories = data.data
      console.log( data.data)
     }).catch(err=>{
       console.log( err )
     })

    this.$products().then(res=>res.json()).then(data=>{
      console.log( data )
      this.products = data.data
    }).catch(err=>{
      console.log( err )
    })
  }
}

</script>

<style scoped>

</style>
