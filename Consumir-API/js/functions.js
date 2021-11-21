let url = "http://localhost:8000/api/";

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
}

verDatosPersona();