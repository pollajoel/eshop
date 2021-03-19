export const state = () => ({
    auth: false,
    userName:"",
})

export const mutations = {
    isAuth(state) {
        state.auth = true;
    },
    loggedOut(state) {
        state.auth = false;
    },
  setUserName(state,{UserName}){
      state.userName=UserName;
  }
}
