const boton = document.getElementById("btn-saludo");
boton.addEventListener("click", function() {
    alert("Hola, gracias por visitar mi perfil!");
});
const boton = document.getElementById("btn-saludar");
let saludoMostrado = false;
boton.addEventListener("click", function() {
    const seccionContacto = document.getElementById("contacto");

    if (!saludoMostrado) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "Gracias por visitar mi perfil. Espero que volvamos a vernos!";
        mensaje.style.color = "#27ae60";
        mensaje.style.fontWeight = "bold";
        seccionContacto.appendChild(mensaje);

        boton.textContent = "Saludo enviado";
        boton.disabled = true;
        boton.style.backgroundColor = "#7f8c8d";

        saludoMostrado = true;
    }
});
const botonNombre = document.getElementById("btn-nombre");
botonNombre.addEventListener("click", function() {
    alert("mi nombre es Salvador Alvarao Pineda");
});
const botonNombre = document.getElementById("btn-nombre");
let NombreMostrado = false;
botonNombre.addEventListener("click", function() {
    const seccionProyectos = document.getElementById("proyectos");
    if (!NombreMostrado) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "mi nombre es Salvador Alvarao Pineda";
        mensaje.style.color = "#6f2cff";
        mensaje.style.fontWeight = "bold";
        seccionProyectos.appendChild(mensaje);

        botonNombre.textContent = "nombre enviado";
        botonNombre.disabled = true;
        botonNombre.style.backgroundColor = "#34bbc6";

        NombreMostrado = true;
    }
});
