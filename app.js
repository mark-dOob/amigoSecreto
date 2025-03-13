/*
Autor: Mark-dOob
Fecha: 11-03-2025, 13-03-2025
Hora: 16:31, 13:03
*/

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//1.Crear un array para almacenar los nombres
let amigos = [];

/*
Descripción
Implementa una función para agregar amigos

Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
Tareas específicas:
    Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.

    Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."

    Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().

    Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
*/

function agregarAmigo() 
{
    let entradaUsuario = document.getElementById('amigo').value.toUpperCase();
    
    if (entradaUsuario == '')
    {
        alert("Por, favor inserte un nombre.");
    }else{
        amigos.push(entradaUsuario);
    }

    limpiarImput();
    console.log(amigos);
    generarListaHTML();
}

function limpiarImput() 
{
    document.getElementById('amigo').value = '';
}

/*
Descripción

Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.

Tareas específicas:

    Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

    Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

    Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

    Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
*/

function generarListaHTML()
{
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ""; //sin esta linea la lista en el html se genera cada vez que se llama a la funcion, repitiendose los elementos
    
    contador = 0;
    while (contador <= amigos.length-1)
    {
        let elementoLista = document.createElement('li'); //se crea un elemento li, en cada iteracion
        elementoLista.textContent = amigos[contador]; //se asigna al elemento creado un elemento del arreglo
        listaHTML.appendChild(elementoLista); // se agrega en el HTML el elemento li antes creado
        contador++
    }
}