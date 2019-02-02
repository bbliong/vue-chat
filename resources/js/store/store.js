import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Import Modules Login
import {Message} from './modules/Message.js'

export default new Vuex.Store({
  modules : {
    //Daftarin Modules Login kedalam Vuex
      Message
  	}
});
