<?php 

/**
 * http://localhost/proyecto/api/video.php?id=video_id
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

function getVideo($id) {
    global $enlace;
    $videos = [];
    $result = mysqli_query($enlace, 'SELECT * FROM videos WHERE id = ' . $id);
    while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
        array_push($videos, $row);
    }
    return $videos;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Buscar el video que coincida con el queryString id
    $videos = getVideo($_GET['id']);
} else {
    header('HTTP/1.1 405 Method Not Allowed');
    exit;
}

echo json_encode($videos);


?>