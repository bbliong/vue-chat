import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Import Modules
import {Message} from './modules/Message.js'
import {Auth} from './modules/Auth.js'

export default new Vuex.Store({
  modules : {
    //Daftarin Modules Login kedalam Vuex
      Message,
      Auth
  	}
});
