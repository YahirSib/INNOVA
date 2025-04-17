<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Users\UsersController;
use Inertia\Inertia;

Route::resource('users', UsersController::class)->middleware(['auth', 'verified']);