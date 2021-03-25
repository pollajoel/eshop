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
       console.log( body )
       return fetch(`${process.env.API_URL}/addcategorie`,{
         headers:{"Content-type":"Application/json"},
         method:"POST",
         body:JSON.stringify(body)}
       )
     }),
     inject('deleteCategorie',(cat,token)=>{
       console.log( cat )
       return fetch(`${process.env.API_URL}/deleteCat/`,{
         headers:{"Content-type":"Application/json"},
         method:"POST",
         body:JSON.stringify(cat)
       })
     })

}
