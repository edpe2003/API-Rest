@extends('layouts.plantilla')

@section('titulo', 'Alta Persona')

@section('cuerpo')
    <div class="container text-center border border-5 border-primary rounded mt-5 p-3">
        <h1>Modificar Persona</h1>
        <form action="{{route('persona.actualizar',$persona->id)}}" method="POST">
            @csrf
            @method('PUT')
            <div class="m-2">
                <label for="CI">
                    Cedula: 
                    <input name="CI" type="number" value="{{$persona->CI}}" required>
                </label>
            </div>
            @error('CI')
                <p class="text-danger"><b>*{{$message}}</b></p>
            @enderror
            <div class="m-2">
                <label for="nombre">
                    Nombre: 
                    <input name="nombre" type="text" value="{{$persona->nombre}}" required>
                </label>
            </div>
            @error('nombre')
                <p class="text-danger"><b>*{{$message}}</b></p>
            @enderror
            <div class="m-2">
                <label for="apellido">
                    Apellido: 
                    <input name="apellido" type="text" value="{{$persona->apellido}}" required>
                </label>
            </div>
            @error('apellido')
                <p class="text-danger"><b>*{{$message}}</b></p>
            @enderror
            <input type="hidden" value="{{$persona->id}}" name="id">
            <input type="submit" value="Modificar" class="btn btn-primary w-100 mt-3">
        </form>
    </div>
@endsection