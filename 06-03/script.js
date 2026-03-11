const nombreInput = document.getElementById("nombre");
const btnSaludar = document.getElementById("btnSaludar");
const mensajesaludo = document.getElementById("mensaje");

btnSaludar.addEventListener("click", () => {
    const nombre = nombreInput.value;
    if (nombre.trim() !== "") {
            mensajesaludo.textContent = `Hola, ${nombre} Ejercicio DOM!`;

            nombreInput.value = '';
    } else {
            mensajesaludo.textContent = "Por favor, ingresa tu nombre.";
            nombreInput.value = '';
    }
});

const formulario = document.getElementById("formSuscripcion");
const correo = document.getElementById("correoUsuario");
const mensajeForm = document.getElementById("mensajeEnvio");


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const correoValor = correo.value;
    mensajeForm.textContent = `Gracias por suscribirte con el correo: ${correoValor}`;
    formulario.reset();
})