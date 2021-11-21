<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControllerPersona;


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

Route::get('Persona/Home', [ControllerPersona::class, 'home'])->name('persona.home');

Route::post('Persona/Alta', [ControllerPersona::class, 'ingresarPersona'])->name('persona.ingresar');

Route::delete('Persona/Eliminar', [ControllerPersona::class, 'eliminarPersona'])->name('persona.eliminar');

Route::post('Persona/Modificar', [ControllerPersona::class, 'modificarPersona'])->name('persona.modificar');