import { SYSTEM_CONFIG } from '../config.js';

export default {
    // postLogin: function( email, password){
    //   return axios.post( SYSTEM_CONFIG.API_URL + '/login',
    //     {
    //         email:email,
    //         password:password
    //     },{
  	// 		headers: {
  	// 			'Access-Control-Allow-Origin': '*',
  	// 			'Content-Type': 'application/json',
    //     }
  	// 	}
    //   );
    // },
    getAuth : function(){
  		return axios.get(SYSTEM_CONFIG.API_URL + '/api/user',{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        }
      })
  	},
}
