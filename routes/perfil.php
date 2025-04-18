<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Perfil\PerfilController;
use Inertia\Inertia;

Route::resource('perfil', PerfilController::class)->middleware(['auth']);