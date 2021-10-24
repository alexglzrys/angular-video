import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVideo } from '../interfaces/video';

/**
 * Servicio que se comunica con el Backend para consultar la información de los videos
 */

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http: HttpClient) {

  }

  // Obtener todos los videos registrados en la base de datos
  getAllVideos(): Observable<Array<IVideo>> {
    const URL = 'http://localhost:8888/Backend/services-angular-videos/api/videos.php';
    return this.http.get<Array<IVideo>>(URL);
  }

}
