<?php 

$enlace = mysqli_connect('localhost', 'alejandro', 'administrador', 'angular-videos', 8889);

if (!$enlace) {
    echo "Error: No se puede conectar con MySQL " . PHP_EOL;
    echo "Error de depuración: " . mysqli_connect_errno() . PHP_EOL;
    echo "Mensaje: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

?>