/*
    Defines the API route we are using.
*/
var api_url = '';

switch( process.env.NODE_ENV ){
  case 'development':
    api_url = 'http://laravel-chat.test';
  break;
  case 'production':
    api_url = 'https://chat.elhamidy.me';
  break;
}

export const SYSTEM_CONFIG = {
  API_URL : api_url,
}
