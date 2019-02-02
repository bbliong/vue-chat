import AuthAPI from './../../api/auth.js'

export const Auth = {
    state: {
        Auth :[],
        isTyping : false
    },
    actions: {
      // Mengambil data dari seluruh pesan
        loadAuth({commit}) {
            AuthAPI.getAuth()
                .then(function(response) {
                    commit('setAuth', response.data);
                })
                .catch(function() {
                    commit('setAuth', []);
                });
        },
        typing({commit,state,dispatch}, data) {
          let status
          if(data.val !== ''){
             // status = 1
            if(state.isTyping){
                console.log("uada adah")
                return true;
              }
            commit('setIsTyping',true);
          }else{
          commit('setIsTyping', false);
             // status = 0
          }
         AuthAPI.setTyping( status)
             .then(function(response) {

             })
             .catch(function() {
                 commit('setIsTyping', false);
             });
       },
    },
    mutations: {
        setAuth(state, data){
          state.Auth = data;
        },
        setIsTyping(state, data){
          state.isTyping = data;
        }
    },
    getters: {
        getAuth(state){
          return state.Auth;
        },
        getIsTyping(state){
          return state.isTyping;
        }
    }
}
