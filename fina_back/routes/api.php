<?php

use App\Http\Controllers\StudentController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\InscreptionController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\RevenuController;
use App\Http\Controllers\DepenseController;
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


Route::controller(InscreptionController::class)->group(function(){
    Route::get('/inscreptions', 'index');
    Route::post('/inscreption', 'store');
    Route::get('/inscreption/{id}', 'show');
    Route::put('/inscreption/{id}', 'update');
    Route::delete('/inscreption/{id}', 'destroy');
});


Route::controller(MessageController::class)->group(function(){
    Route::get('/messages', 'index');
    Route::post('/message', 'store');
    Route::get('/message/{id}', 'show');
    Route::put('/message/{id}', 'update');
    Route::delete('/message/{id}', 'destroy');
});

Route::controller(RevenuController::class)->group(function(){
    Route::get('/revenus', 'index');
    Route::post('/revenu', 'store');
    Route::get('/revenu/{id}', 'show');
    Route::put('/revenu/{id}', 'update');
    Route::delete('/revenu/{id}', 'destroy');
});


Route::controller(DepenseController::class)->group(function(){
    Route::get('/depenses', 'index');
    Route::post('/depense', 'store');
    Route::get('/depense/{id}', 'show');
    Route::put('/depense/{id}', 'update');
    Route::delete('/depense/{id}', 'destroy');
});
