document.getElementById('formulario-login').addEventListener("submit", (event) => {
    event.preventDefault();

    var username = document.getElementById('loginUsuario').value;
    var password = document.getElementById('loginPassword').value;

    if(username === 'mirtita' && password == '123'){
        var url = 'paciente.html?usuario=' + username;
        window.location.href = url;
    } else if (username === 'house' && password === '123'){
        var url = 'doctor.html?usuario=' + username;
        window.location.href = url;
    } else {
        alert("Usuario o contraseña no válidas.")
    }
})