import AuthAPI from './../../api/auth.js'

export const Auth = {
    state: {
        Auth :[],
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
    },
    mutations: {
        setAuth(state, data){
          state.Auth = data;
        },
    },
    getters: {
        getAuth(state){
          return state.Auth;
        }
    }
}
