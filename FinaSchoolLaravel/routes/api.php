<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\PreInscripController;
use App\Http\Controllers\EditLanding\FormationController;
use App\Http\Controllers\EditLanding\HomeController;
use App\Http\Controllers\EditLanding\ServiceController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Message
Route::post('Message',[MessageController::class,'Message']);

//Pre Inscription
Route::post('PreInscrip',[PreInscripController::class,'PreInscrip']);

//Home
Route::get('Home',[HomeController::class,'Home']);

//Services
Route::get('Service',[ServiceController::class,'Service']);

