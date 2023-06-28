var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('usuario');

document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    
    if (username) {
        document.getElementById('texto-bienvenida-doctor').textContent = 'Bienvenido/a ' + username;
    }
})