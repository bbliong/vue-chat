const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */



  mix.js('resources/js/app.js', 'public/js')
      .webpackConfig({
           module: {
               rules: [
                   {
                       test:/\.jsx?$/,
                       use: [
                           {
                               loader: 'babel-loader',
                               options: Config.babel()
                           }
                       ]
                   }
               ]
           },
           resolve: {
             //konfigurasi agar sass bisa diapakai global dalam component
              alias: {
                '@': path.resolve('resources/sass')
              }
            }
       })
     .sass('resources/sass/app.scss', 'public/css');
