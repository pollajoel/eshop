export const state = () => ({
  _id:"",
  auth: false,
  userName:"",
  isAdmin:false,
  email:"",
  city:"",
  country:"",
  ZipCode:"",
  adresseFi:"",
  name:"",
  firstName:"",
  phone:""

})

export const mutations = {
    isAuth(state) {
        state.auth = true;
    },
    loggedOut(state) {
        state.auth = false;
    },
   setID(state,_id){
      state._id= _id;
  },
  setUserName(state,{UserName}){
      state.userName=UserName;
  },
  setIsadmin(state,isadmin){
      state.isAdmin = isadmin;
  },

  setUserCity(state,city){
      state.city = city;
  },
  Setemail(state,email){
      state.email =email;
  },
  SetCountry(state,country){
      state.country =country;
  },
   SetZipcode(state,ZipCode){
      state.ZipCode = ZipCode;
  },
  SetadresseFi(state,adresseFi){
      state.adresseFi= adresseFi;
  },
  SetName(state,name){
      state.name = name;
  },
  Setphone(state,phone){
      state.phone = phone;
  },
  SetFirsName(state,firstName){
      state.firstName = firstName;
  },

}
