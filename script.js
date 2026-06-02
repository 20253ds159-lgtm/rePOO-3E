const boton = document.getElementById("btn-saludo");
boton.addEventListener("click", function() {
    alert("Hola, gracias por visitar mi perfil!");
});
const botonSaludo = document.getElementById("btn-saludo");
let saludoMostrado = false;
botonSaludo.addEventListener("click", function() {
    const seccionContacto = document.getElementById("contacto");

    if (!saludoMostrado) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "Gracias por visitar mi perfil. Espero que volvamos a vernos!";
        mensaje.style.color = "#27ae60";
        mensaje.style.fontWeight = "bold";
        seccionContacto.appendChild(mensaje);

        botonSaludo.textContent = "Saludo enviado";
        botonSaludo.disabled = true;
        botonSaludo.style.backgroundColor = "#7f8c8d";

        saludoMostrado = true;
    }
});

const botonNombre = document.getElementById("btn-nombre");
let nombreMostrado = false;
botonNombre.addEventListener("click", function() {

    if (nombreMostrado) return;
    const tituloProyectos = document.querySelector("h2");

    if (tituloProyectos) {
        tituloProyectos.textContent = "Salvador Alvarado Pineda";
    }
    botonNombre.textContent = "Nombre mostrado";
    botonNombre.disabled = true;
    botonNombre.style.backgroundColor = "#7f8c8d";
    nombreMostrado = true;
});