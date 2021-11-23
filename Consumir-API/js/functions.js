let url = "http://localhost:8000/api/";
let estadoCI = false;
let estadoNombre = false;
let estadoApellido = false;

function validarDatos() {
    let estadoCI = false;
    let estadoNombre = false;
    let estadoApellido = false;

    const CI = document.getElementById("CI");
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const enviar = document.getElementById("enviar");

    CI.addEventListener('keyup', () => {
        if (CI.value.length < 8 || CI.value.length > 8 && CI.value.length > 1) {
            estadoCI = false;
            document.getElementById("mensajeCI").innerHTML = "<div class='badge bg-danger text-wrap' style='width: 6rem;'>Dato no valido</div>";
        } else if (CI.value.length > 1) {
            estadoCI = true;
            document.getElementById("mensajeCI").innerHTML = "<svg class='text-success fw-bold float-start' xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-check-circle' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/><path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z'/></svg>";
        }
        estado();
    });

    nombre.addEventListener('keyup', () => {
        if (nombre.value.length > 20 || nombre.value.length < 2) {
            estadoNombre = false;
            document.getElementById("mensajeNombre").innerHTML = "<div class='badge bg-danger text-wrap' style='width: 6rem;'>Dato no valido</div>";
        } else if (nombre.value.length > 1) {
            estadoNombre = true;
            document.getElementById("mensajeNombre").innerHTML = "<svg class='text-success fw-bold float-start' xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-check-circle' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/><path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z'/></svg>";
        }
        estado();
    });

    apellido.addEventListener('keyup', () => {
        if (apellido.value.length > 20 || apellido.value.length < 2) {
            estadoApellido = false;
            document.getElementById("mensajeApellido").innerHTML = "<div class='badge bg-danger text-wrap' style='width: 6rem;'>Dato no valido</div>";
        } else if (apellido.value.length > 1) {
            estadoApellido = true;
            document.getElementById("mensajeApellido").innerHTML = "<svg class='text-success fw-bold float-start' xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-check-circle' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/><path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z'/></svg>";
        }
        estado();
    });

    let estado = () => {
        if (estadoCI && estadoNombre && estadoApellido) {
            enviar.disabled = false;
        } else {
            enviar.disabled = true;
        }
    }
}

function validarModificarDatos() {
    const CI = document.getElementById("m-CI");
    const nombre = document.getElementById("m-nombre");
    const apellido = document.getElementById("m-apellido");
    const enviar = document.getElementById("m-enviar");

    CI.addEventListener('keyup', () => {
        if (CI.value.length < 8 || CI.value.length > 8 && CI.value.length > 1) {
            estadoCI = false;
            document.getElementById("m-mensajeCI").innerHTML = "<div class='badge bg-danger text-wrap' style='width: 6rem;'>Dato no valido</div>";
        } else if (CI.value.length > 1) {
            estadoCI = true;
            document.getElementById("m-mensajeCI").innerHTML = "<svg class='text-success fw-bold float-start' xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-check-circle' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/><path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z'/></svg>";
        }
        estado();
    });

    nombre.addEventListener('keyup', () => {
        if (nombre.value.length > 20 || nombre.value.length < 2) {
            estadoNombre = false;
            document.getElementById("m-mensajeNombre").innerHTML = "<div class='badge bg-danger text-wrap' style='width: 6rem;'>Dato no valido</div>";
        } else if (nombre.value.length > 1) {
            estadoNombre = true;
            document.getElementById("m-mensajeNombre").innerHTML = "<svg class='text-success fw-bold float-start' xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-check-circle' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/><path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z'/></svg>";
        }
        estado();
    });

    apellido.addEventListener('keyup', () => {
        if (apellido.value.length > 20 || apellido.value.length < 2) {
            estadoApellido = false;
            document.getElementById("m-mensajeApellido").innerHTML = "<div class='badge bg-danger text-wrap' style='width: 6rem;'>Dato no valido</div>";
        } else if (apellido.value.length > 1) {
            estadoApellido = true;
            document.getElementById("m-mensajeApellido").innerHTML = "<svg class='text-success fw-bold float-start' xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-check-circle' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/><path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z'/></svg>";
        }
        estado();
    });

    let estado = () => {
        if (estadoCI && estadoNombre && estadoApellido) {
            enviar.disabled = false;
        } else {
            enviar.disabled = true;
        }
    }
}

function verDatosPersona() {
    fetch(url + "Persona/Home", {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            let contenido = response.data;
            let contenedor = document.getElementById("contenedor");
            contenedor.innerHTML = "";
            contenido.forEach(element => {
                contenedor.innerHTML += `<tr>
                                            <th>${element.CI}</th>
                                            <th>${element.nombre}</th>
                                            <th>${element.apellido}</th>
                                            <th>
                                                <input onclick="bajaPersona(${element.id})" type="submit" class="btn btn-danger" value="Eliminar">
                                                <input onclick="modalModificar(${element.id})" type="button" value="Modificar" class="btn btn-warning">
                                        </tr>`;
            });
        });
}

function altaPersona() {
    let data = {
        CI: document.getElementById("CI").value,
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value
    }
    fetch(url + "Persona/Alta", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
        .then(() => verDatosPersona());

    document.getElementById("CI").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";

    document.getElementById("mensajeCI").innerHTML = "";
    document.getElementById("mensajeNombre").innerHTML = "";
    document.getElementById("mensajeApellido").innerHTML = "";
    document.getElementById("enviar").disabled = true;


}

function bajaPersona(id) {
    let data = {
        id: id
    }
    fetch(url + "Persona/Eliminar", {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
        .then(() => verDatosPersona());
    document.getElementById("m-CI").value = "";
    document.getElementById("m-nombre").value = "";
    document.getElementById("m-apellido").value = "";
}

function modalModificar(id) {
    let data = {
        id: id
    }
    fetch(url + "Persona/Modificar", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById("m-id").value = data.id;
            document.getElementById("m-CI").value = data.CI;
            document.getElementById("m-nombre").value = data.nombre;
            document.getElementById("m-apellido").value = data.apellido;
            document.getElementById("m-enviar").disabled = false;

            document.getElementById("m-CI").disabled = false;
            document.getElementById("m-nombre").disabled = false;
            document.getElementById("m-apellido").disabled = false;

            estadoCI = true;
            estadoNombre = true;
            estadoApellido = true;
        });
}

function modificarPersona() {
    let data = {
        CI: document.getElementById("m-CI").value,
        nombre: document.getElementById("m-nombre").value,
        apellido: document.getElementById("m-apellido").value
    }
    fetch(url + `Persona/${document.getElementById("m-id").value}/Actualizar`, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    })
        .then(() => verDatosPersona());
    document.getElementById("m-CI").value = "";
    document.getElementById("m-nombre").value = "";
    document.getElementById("m-apellido").value = "";

    
    document.getElementById("m-mensajeCI").innerHTML = "";
    document.getElementById("m-mensajeNombre").innerHTML = "";
    document.getElementById("m-mensajeApellido").innerHTML = "";
    document.getElementById("m-enviar").disabled = true;

    document.getElementById("m-CI").disabled = true;
    document.getElementById("m-nombre").disabled = true;
    document.getElementById("m-apellido").disabled = true;
}

verDatosPersona();

validarDatos();

validarModificarDatos();