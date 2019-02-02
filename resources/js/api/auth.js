import { SYSTEM_CONFIG } from '../config.js';

export default {
    setTyping: function(status){
      return axios.post( SYSTEM_CONFIG.API_URL + '/api/typing',
        {
            status:status
        },{
  			headers: {
  				'Access-Control-Allow-Origin': '*',
  				'Content-Type': 'application/json',
        }
  		}
      );
    },
    getAuth : function(){
  		return axios.get(SYSTEM_CONFIG.API_URL + '/api/user',{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        }
      })
  	},
}
