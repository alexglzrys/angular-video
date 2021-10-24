<?php 

/**
 * http://localhost/proyecto/api/videos.php
 * 
 * CORS
 * Permitir el acceso a cualquier servicio (servidor)
 * Permitir el acceso a peticiones de tipo GET y POST
 * Especificar el tipo de contenido de respuesta del servidor
 */
header('Access-Control-Allow-Origin: *');   
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Content-Type: application/json');

include_once '../db.php';

function getAllVideos() {
    global $enlace;
    $videos = [];
    $results = mysqli_query($enlace, 'SELECT * FROM videos');
    while ($row = mysqli_fetch_array($results, MYSQLI_ASSOC)) {
        array_push($videos, $row);
    }
    return $videos;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $videos = getAllVideos();
} else {
    header('HTTP/1.1 405 Method Not Allowed');
    exit;
}

echo json_encode($videos);

?>