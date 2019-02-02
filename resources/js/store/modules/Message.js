import MessageAPI from './../../api/message.js'

export const Message = {
    state: {
        message :[],
        messageSentStatus : 0
    },
    actions: {
      // Mengambil data dari seluruh pesan
        loadMessage({commit}) {
            MessageAPI.getMessage()
                .then(function(response) {
                    commit('setMessage', response.data);
                })
                .catch(function() {
                    commit('seteMessage', []);
                });
        },
        postMessage({commit,state,dispatch}, data) {
          commit('setMessageSentStatus', 0);
           MessageAPI.postMessage(data.formData)
               .then(function(response) {
                  // commit('updateMessage', response.data);
                   commit('setMessageSentStatus',1);
               })
               .catch(function() {
                   commit('setMessageSentStatus', 2);
               });
       },
    },
    mutations: {
        setMessage(state, data){
          state.message = data;
        },
        setMessageSentStatus(state,data){
          state.messageSentStatus = data;
        },
        updateMessage(state,data){
           state.message.push(data);
        }
    },
    getters: {
        getMessage(state){
          return state.message;
        },
        getMessageStatus(state){
          return state.messageSentStatus;
        }
    }
}
