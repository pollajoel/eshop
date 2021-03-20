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
     })


}
