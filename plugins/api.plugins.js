export default ({ app }, inject) => {

   inject('login', (body) => {

     return fetch(`${process.env.API_URL}/login`,
       {
         method:"POST",
         headers: {"Content-type":"Application/json"},
         body:JSON.stringify(body)}
         )
   }),
     inject('getMe',(id,token)=>{
       return fetch(`${process.env.API_URL}/user/${id}`,{
          headers: {
            "Authorization":token
          }
       })
     }),
     inject('getUsers',(token)=>{
       return fetch(`${process.env.API_URL}/users`,{
          headers: {
            "Authorization":token
          }
       })
     }),

     inject('register',(body)=>{
       return fetch(`${process.env.API_URL}/register/`,{
         headers:{"Content-type":"Application/json"},
         method:"POST",
         body:JSON.stringify(body)}
       )
     }),
     inject('categories',(body)=>{
       return fetch(`${process.env.API_URL}/catlist/`,{
         headers:{"Content-type":"Application/json"}})
     }),
     inject('deleteCategories',(id,token)=>{
       return fetch(`${process.env.API_URL}/deleteCat/${id}`,{
          headers: {
            "Authorization":token
          }
       })
     }),
     inject('addCategorie',(body)=>{
       return fetch(`${process.env.API_URL}/addcategorie`,{
         headers:{"Content-type":"Application/json"},
         method:"POST",
         body:JSON.stringify(body)}
       )
     }),
     inject('deleteCategorie',(cat,token)=>{

       return fetch(`${process.env.API_URL}/deleteCat/`,{
         headers:{"Content-type":"Application/json"},
         method:"POST",
         body:JSON.stringify(cat)
       })
     }),
     inject('Addproduct',(product,token)=>{

       return fetch(`${process.env.API_URL}/addProduct`,{
         headers: {
            "Authorization":token,
           "Content-type":"Application/json"
          },
         method:"POST",
         body:JSON.stringify(product)
       })
     }),//products plugins
  inject('Addproducts',(user,token)=>{
       return fetch(`${process.env.API_URL}/userDelete`,{
         headers: {
            "Authorization":token,
           "Content-type":"Application/json"
          },
         method:"POST",
         body:JSON.stringify(user)
       })
     }),
     inject('products',()=>{
       return fetch(`${process.env.API_URL}/productList`,{
         headers: {
           "Content-type":"Application/json"
          },
         method:"GET",
       })
     }),
     //plugin to upload file
     inject('upload',(fileInput,fileName)=>{
       var formdata = new FormData();
       formdata.append("file", fileInput[0], fileName);
       var myHeaders = new Headers();

       return fetch(`${process.env.API_URL}/upload`,{
         headers: myHeaders,
         method:"POST",
         body:formdata
       })
     }),
     inject('productdeleted',(product,token)=>{

       return fetch(`${process.env.API_URL}/productdeleted`,{
         headers:{"Content-type":"Application/json"},
         method:"POST",
         body:JSON.stringify(product)
       })
     }),//update api link.
     inject('deleteUser',(product,token)=>{

       return fetch(`${process.env.API_URL}/userDelete`,{
         headers:{"Content-type":"Application/json"},
         method:"POST",
         body:JSON.stringify(product)
       })
     }),//update api link.
     inject('updateuser',(id,user,token)=>{
       return fetch(`${process.env.API_URL}/user/${id}`,{
         headers:{
           "Content-type":"Application/json",
            "Authorization":token
         },
         method:"PUT",
         body:JSON.stringify(user)
       })
     }),
     inject('productupdate',(id,product,token)=>{
       return fetch(`${process.env.API_URL}/productupdate/${id}`,{
         headers:{
           "Content-type":"Application/json",
            "Authorization":token
         },
         method:"PUT",
         body:JSON.stringify(product)
       })
     })


}
