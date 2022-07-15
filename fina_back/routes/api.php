<?php

use App\Http\Controllers\StudentController;
use App\Http\Controllers\EmployeeController;
use GuzzleHttp\Handler\Proxy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::controller(StudentController::class)->group(function(){
    Route::get('/students', 'index');
    Route::post('/student', 'store');
    Route::get('/student/{id}', 'show');
    Route::put('/student/{id}', 'update');
    Route::delete('/student/{id}', 'destroy');

});

Route::controller(EmployeeController::class)->group(function(){
    Route::get('/employees', 'index');
    Route::post('/employee', 'store');
    Route::get('/employee/{id}', 'show');
    Route::put('/employee/{id}', 'update');
    Route::delete('/employee/{id}', 'destroy');

});
