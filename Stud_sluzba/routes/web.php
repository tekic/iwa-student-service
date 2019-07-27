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

Route::post('api/userlogin', 'UcenikController@login');
Route::post('api/userRegistration', 'UcenikController@registration');

Route::post('api/proflogin', 'ProfesorController@login');
Route::post('api/profRegistration', 'ProfesorController@registration');

Route::get('api/allPredmets','PredmetController@all');
Route::get('api/allUsmerenje','UsmerenjeController@allUsmerenje');

Route::put('api/changePass','UcenikController@changePass');
Route::put('api/changeInfo','UcenikController@changeInfo');

Route::put('api/changePass','ProfesorController@changePass');
Route::put('api/changeInfoProf','ProfesorController@changeInfo');

Route::put('api/izborUsmerenja','UcenikController@izborUsmerenja');

Route::get('api/uzimanjeSvihUcenika/{id}','ProfesorController@uzimanjeSvihUcenika');

Route::put('api/ocenjivanje','ProfesorController@ocenjivanje');

Route::post('api/prosecnaOcena','UcenikController@prosecnaOcena');

Route::post('api/OcenePredmet','UcenikController@OcenePredmet');