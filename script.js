// Selecciona el formulario y el input del nombre
const formulario = document.querySelector("#formulario");
const nombreUsuario = document.querySelector(".nombre");

// Maneja el evento submit del formulario
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Obtiene el valor ingresado y el elemento para mostrar mensajes
    let nombreIngresado = nombreUsuario.value;
    let mensaje = document.querySelector(".mensaje");

    // Valida la longitud del nombre y muestra mensaje de error si es inválido
    if (nombreIngresado.length <= 3) {
        mensaje.textContent =
            "El nombre ingresado debe tener más de 3 caracteres. Ingresa otro nombre válido.";
        mensaje.style.color = "red";
        mensaje.style.border = "1px solid red";
        return;
    } else {
        // Si el nombre es válido, muestra mensaje de éxito y envía el formulario tras 3 segundos
        mensaje.textContent = "El nombre ingresado es válido.";
        mensaje.style.color = "green";
        mensaje.style.border = "1px solid green";
        setTimeout(() => {
            formulario.submit();
        }, 3000);
    }
});