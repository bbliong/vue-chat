<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(["middleware" => ["auth"]], function(){

    Route::group(['prefix' => 'api'], function(){
          Route::get('/chat', 'MessageController@index')->name('apiChat');
          Route::get('/user', 'MessageController@user')->name('apiUser');
          Route::post('/store', 'MessageController@store')->name('storeMessage');
          Route::post('/typing', 'MessageController@typing')->name('typing');
    });

    Route::get('/chat', 'MessageController@show')->name('chat');
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
