var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('usuario');

document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    
    if (username) {
        document.getElementById('texto-bienvenida-paciente').textContent = 'Bienvenido/a ' + username;
        document.getElementById('paciente-tabla').textContent = username;
    }
})

document.getElementById('formulario-reserva').addEventListener("submit", (event) => {
    event.preventDefault();

    alert("Turno reservado con éxito.");
})