<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/contact', [App\Http\Controllers\HomeController::class, 'contact'])->name('contact');
Route::get('/about', [App\Http\Controllers\HomeController::class, 'about'])->name('about');



Route::get('/shop', [ProductController::class, 'index'])->name('products.index');
Route::get('/products/create', [ProductController::class, 'create'])->name('products.create');
Route::post('/products', [ProductController::class, 'store'])->name('products.store');
Route::get('/products/{product}', [ProductController::class, 'show'])->name('products.show');
Route::get('/products/{product}/edit', [ProductController::class, 'edit'])->name('products.edit');
Route::put('/products/{product}', [ProductController::class, 'update'])->name('products.update');
Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('products.destroy');


Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::get('/dashboard/orders', [DashboardController::class, 'orders'])->name('dashboard.orders');
Route::get('/dashboard/products', [DashboardController::class, 'products'])->name('dashboard.products');
Route::get('/dashboard/products/{product}', [DashboardController::class, 'product'])->name('dashboard.product');
Route::get('/dashboard/products/{product}/edit', [DashboardController::class, 'edit'])->name('dashboard.edit');
Route::put('/dashboard/products/{product}', [DashboardController::class, 'update'])->name('dashboard.update');
Route::delete('/dashboard/products/{product}', [DashboardController::class, 'destroy'])->name('dashboard.destroy');


Route::get('cart', [CheckoutController::class, 'cart'])->name('cart.index');


Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout.index');
Route::post('/checkout', [CheckoutController::class, 'store'])->name('checkout.store');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
