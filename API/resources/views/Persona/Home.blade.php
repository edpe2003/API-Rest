@extends('layouts.plantilla')

@section('titulo', 'Alta Persona')

@section('cuerpo')
    <div class="container text-center border border-5 border-primary rounded mt-5 p-3">
        <h1>Ingresar Persona</h1>
        <form action="{{route('persona.ingresar')}}" method="POST">
            @csrf
            <div class="m-2">
                <label for="CI">
                    Cedula: 
                    <input name="CI" type="number" value="{{old('CI')}}">
                </label>
            </div>
            @error('CI')
                <p class="text-danger"><b>*{{$message}}</b></p>
            @enderror
            <div class="m-2">
                <label for="nombre">
                    Nombre: 
                    <input name="nombre" type="text" value="{{old('nombre')}}">
                </label>
            </div>
            @error('nombre')
                <p class="text-danger"><b>*{{$message}}</b></p>
            @enderror
            <div class="m-2">
                <label for="apellido">
                    Apellido: 
                    <input name="apellido" type="text" value="{{old('apellido')}}">
                </label>
            </div>
            @error('apellido')
                <p class="text-danger"><b>*{{$message}}</b></p>
            @enderror
            <input type="submit" value="Ingresar" class="btn btn-primary w-100 mt-3">
        </form>
    </div>
    <div class="container rounded border border-5 text-center mt-5">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">CI</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Accion</th>
            </tr>
            </thead>
            @foreach ($persona as $row)
            <tbody>
                <tr>
                    <th scope="row">{{$row->CI}}</th>
                    <td>{{$row->nombre}}</td>
                    <td>{{$row->apellido}}</td>
                    <td>
                        <div class="d-flex justify-content-center gap-2">
                            <form action="{{route('persona.eliminar')}}" method="POST">
                                @csrf
                                @method('delete')
                                <input type="submit" value="Eliminar" class="btn btn-danger">
                                <input type="hidden" value="{{$row->id}}" name="id">
                            </form>
                            <form action="{{route('persona.modificar')}}">
                                <input type="submit" value="Modificar" class="btn btn-warning">
                                <input type="hidden" value="{{$row->id}}" name="id">
                            </form>
                        </div>
                    </td>
                </tr>
            </tbody>
            @endforeach
        </table>
    </div>
@endsection