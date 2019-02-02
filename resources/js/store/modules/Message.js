import MessageAPI from './../../api/message.js'

export const Message = {
    state: {
        message :[],
    },
    actions: {
      // Mengambil data dari seluruh vessels
        loadVessels({commit}) {
            VesselAPI.getMessage()
                .then(function(response) {
                    commit('setMessage', response.data);
                })
                .catch(function() {
                    commit('seteMessage', []);
                });
        },
    },
    mutations: {
        setMessage(state, data){
          state.message = data;
        },
    },
    getters: {
        getMessage(state){
          return state.message;
        },
    }
}
