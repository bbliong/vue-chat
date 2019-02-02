import { SYSTEM_CONFIG } from '../config.js';

export default {
    postMessage: function(formData){
      return axios.post( SYSTEM_CONFIG.API_URL + '/api/store',formData,
      {
  			headers: {
  				'Access-Control-Allow-Origin': '*',
  				'Content-Type': 'multipart/form-data',
        }
  		}
      );
    },
    getMessage : function(){
  		return axios.get(SYSTEM_CONFIG.API_URL + '/api/chat',{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        }
      })
  	},


}
