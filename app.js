// LocalStorage: guardar y leer datos

localStorage.setItem("nombreUsuario", "juan");

localStorage.setItem("Ubicacion", "Albox");

console.log(localStorage.getItem("Ubicacion", "albox"));

console.log(localStorage.getItem("nombreUsuario"));

// remover y limpieza:

localStorage.removeItem("nombreUsuario");

// localstorage.clearItem();


// Notacion jsqn:  // Guardar y leer objetos en el localStorage:


const usuario= {

	nombre: "juan",

	edad: 25

}


const usuarioJSON= JSON.stringify(usuario);

localStorage.setItem("usuario",usuarioJSON);

const userJSON= localStorage.getItem("ususario");

const usuario2= JSON.parse(usuarioJSON);

console.log(usuario2);



