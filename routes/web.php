<?php

use App\Http\Controllers\AdminChatController;
use App\Http\Controllers\AdminOrderController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\UserController;
use Illuminate\Auth\Events\Logout;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', [HomeController::class, 'index']);
Route::get('/product/{id}', [HomeController::class, 'show']);

Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'create']);
    Route::post('/login', [LoginController::class, 'store']);

    Route::get('/register', [RegistrationController::class, 'create']);
    Route::post('/register', [RegistrationController::class, 'store']);
});

Route::middleware(['auth', 'admin'])->group(function () {
    Route::get('/dashboard', fn () => Inertia::render('Admin/DashboardLayout'));
    Route::resource('/dashboard/product', ProductController::class);

    Route::get('/dashboard/order', [AdminOrderController::class, 'index']);
    Route::get('/dashboard/order/{id}', [AdminOrderController::class, 'show']);
    Route::put('/dashboard/order/{id}', [AdminOrderController::class, 'update']);

    Route::get('/dashboard/chat', [AdminChatController::class, 'index']);
    Route::post('/dashboard/chat/{id}', [AdminChatController::class, 'store']);
    Route::get('/dashboard/chat/{id}', [AdminChatController::class, 'show']);
});

Route::middleware(['auth', 'user'])->group(function () {
    Route::get('/profile', [UserController::class, 'show']);
    Route::put('/profile', [UserController::class, 'update']);

    Route::get('/cart', [CartController::class, 'show']);
    Route::post('/cart', [CartController::class, 'store']);
    Route::delete('/cart', [CartController::class, 'destroyAll']);

    Route::get('/order', [OrderController::class, 'index']);
    Route::post('/order',  [OrderController::class, 'store']);

    Route::get('/chat', [ChatController::class, 'show']);
    Route::post('/chat', [ChatController::class, 'store']);
});

Route::get('/logout', LogoutController::class)->middleware('auth');
