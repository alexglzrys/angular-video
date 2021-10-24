import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Servicio que se comunica con el Backend para consultar la información de los videos
 */

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  //videos!: Array<Object>

  constructor(private http: HttpClient) {

  }

  // Obtener todos los videos registrados en la base de datos
  getAllVideos(): Observable<Array<Object>> {
    const URL = 'http://localhost:8888/Backend/services-angular-videos/api/videos.php';
    return this.http.get<Array<Object>>(URL);
  }

}
