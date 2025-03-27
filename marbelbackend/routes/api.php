<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;



Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Route::post('/register', [AuthController::class, 'register']);
Route::post('/register', [AuthController::class, 'register'])->withoutMiddleware([\App\Http\Middleware\CustomMiddleware::class]);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/dashboard', [AuthController::class, 'dashboard']);
Route::post('/logout', [AuthController::class, 'logout']);
