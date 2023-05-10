// Controlador de eventos para el formulario de inicio de sesión
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtiene los valores del formulario
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    // Obtiene la información del usuario del localStorage
    var user = JSON.parse(localStorage.getItem(email));

    // Verifica si el usuario existe y si la contraseña es correcta
    if (user && user.password === password) {
        // Inicia sesión y redirige al usuario a la página de inicio
        alert("Inicio de sesión exitoso");
        // Aquí puedes redirigir al usuario a la página de inicio
    } else {
        // Muestra un mensaje de error al usuario
        alert("Correo electrónico o contraseña incorrectos");
    }

    // Limpia el formulario
    document.getElementById("login-email").value = "";
    document.getElementById("login-password").value = "";
});