<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $comentario = $_POST["comentario"];
    $destino = "chalo2107@gmail.com"; // Cambia esto al correo predeterminado

    $asunto = "Nuevo mensaje de contacto";
    $mensaje = "Nombre: $nombre\nEmail: $email\nComentario: $comentario";

    mail($destino, $asunto, $mensaje);

    // Redirigir a una página de confirmación o mostrar un mensaje
    header("Location: index.html"); // Cambia esto a la página de confirmación
    exit();
}
?>

