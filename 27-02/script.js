const inputNombre = document.getElementById('nombreUsuario');
const btnSaludar = document.getElementById('btnSaludar');
const mensajeSaludo = document.getElementById('mensaje');


btnSaludar.addEventListener('click', () => {   
    const nombre= inputNombre.value;

    if(nombre.trim() !== ''){
       mensajeSaludo.textContent = `Hola, ${nombre}! Bienvenido/a al curso de DOM.`;

       inputNombre.value = '';
    }else{
        mensajeSaludo.textContent = "Coloque un nombre correcto"; 
        inputNombre.value = '';
    }


});

const formulario = document.getElementById('formSuscripcion');
const inputEmail = document.getElementById('correoUsuario');
const mensajeExito = document.getElementById('mensajeEnvio');

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();

    const email = inputEmail.value;
    mensajeExito.textContent = `Gracias por suscribirte con el correo: ${email}`;

    formulario.reset();
})