// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];
const ingresoNombres = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');
const amigoSorteado = document.getElementById('resultado');

//Metodo para agregar amigo

function agregarAmigo(nombre) {
    let inputAmigos = document.getElementById("amigo");
    let amigo = inputAmigos.value;

    if (amigo === "") {
        alert("Por favor ingrese el nombre de un amigo");
    } else {
        if (nombres.includes(amigo)) {
            alert("Nombre de amigo ya existe en la lista. Por favor introduce un nuevo nombre");
            amigo = "";
        } else {
            actualizarLista();
        }

    }
    ingresoNombres.value = "";
}

//Metodo actualizar lista de nombres
function actualizarLista() {
    amigoSorteado.innerHTML = "";
    nombres.push(ingresoNombres.value);
    listaAmigos.innerHTML = "";

    for (let amigo in nombres) {
        const listadoAmigo = document.createElement("li");
        listadoAmigo.innerHTML = nombres[amigo];
        listaAmigos.appendChild(listadoAmigo);
    }
}


//Metodo para sortear amigo
function sortearAmigo() {
    if (nombres.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        const amigoSecreto = nombres[indiceAleatorio];

        const listadoSorteado = document.createElement('listado');
        listadoSorteado.innerHTML = `El amigo secreto es ${amigoSecreto}`;

        amigoSorteado.appendChild(listadoSorteado);
        listaAmigos.innerHTML = "";

        nombres = [];
    }
}

