<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ControllerPersona;

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

Route::get('/', function () {
    return view('welcome');
});

//Route::get('Persona/Home', [ControllerPersona::class, 'home'])->name('persona.home');

//Route::post('Persona/Alta', [ControllerPersona::class, 'ingresarPersona'])->name('persona.ingresar');

//Route::delete('Persona/Eliminar', [ControllerPersona::class, 'eliminarPersona'])->name('persona.eliminar');

//Route::get('Persona/Modificar', [ControllerPersona::class, 'modificarPersona'])->name('persona.modificar');

Route::put('Persona/{persona}/Actualizar', [ControllerPersona::class, 'actualizarPersona'])->name('persona.actualizar');


