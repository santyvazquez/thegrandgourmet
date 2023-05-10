// Controlador de eventos para el formulario de registro
document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtiene los valores del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Crea un objeto para almacenar la información del usuario
    var user = { name: name, email: email, password: password };

    // Almacena la información del usuario en el localStorage
    localStorage.setItem(email, JSON.stringify(user));

    // Limpia el formulario
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";

    // Muestra un mensaje de confirmación al usuario
    alert("Registro exitoso");
});