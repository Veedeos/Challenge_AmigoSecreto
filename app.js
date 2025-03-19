// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nuevoNombre = input.value.trim();

    if (nuevoNombre){
        amigos.push(nuevoNombre);
        actualizarLista();
        console.log("amigos guardados: ", amigos);
        input.value=""
    }
    else{
        alert("Favor de ingresar un nombre")
    }

}

function actualizarLista(){
    let lista= document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo) =>{
        let li =document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li)
    });
}

function sortearAmigo() {
    if (amigos.length==0){
        alert('No tienes ningun amigo, ve y sal a socializar.');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random()*amigos.length)
    let ganador = amigos[indiceAleatorio];
    console.log("Indice del valor: ", amigos.length)
    document.getElementById("resultado").textContent = "✨👌🤣 El ganador es: " + ganador +" 😍"
}