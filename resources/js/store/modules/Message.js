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
                  console.log(response.data)
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
                   state.message.push(response.data[0]);
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
