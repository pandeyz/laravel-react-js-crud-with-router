<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// To get employees list
Route::get('employees', 'EmployeeController@index');

// To save employee
Route::post('employees', 'EmployeeController@store');

// To get the details of a specific employee
Route::get('employees/{id}', 'EmployeeController@show');

// To save employee
Route::post('employees/update', 'EmployeeController@update');

// To delete employee
Route::post('employees/delete/{id}', 'EmployeeController@delete');
