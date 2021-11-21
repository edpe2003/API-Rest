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
        .then(data => console.log(data));
}

verDatosPersona();