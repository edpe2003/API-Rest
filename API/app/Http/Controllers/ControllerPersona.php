<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use Illuminate\Http\Request;
use App\Http\Requests\validarPersona;


class ControllerPersona extends Controller
{
    public function home()
    {
        $persona = Persona::orderBy('id')->paginate();
        return $persona;
    }

    public function ingresarPersona(validarPersona $request)
    {
        Persona::create($request->all());
    }

    public function eliminarPersona(Request $request)
    {  
        $persona = Persona::find($request->id);
        $persona->delete();
        return $persona;
    }

    public function modificarPersona(Request $request)
    {
        return Persona::find($request->id);
    }

    public function actualizarPersona(Request $request, Persona $persona)
    {
        $persona->CI = $request->CI;
        $persona->nombre = $request->nombre;
        $persona->apellido = $request->apellido;
        $persona->save();
    }
}
