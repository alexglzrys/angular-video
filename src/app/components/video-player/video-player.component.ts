import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVideo } from 'src/app/interfaces/video';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  video!: IVideo
  id!: number

  constructor(private route: ActivatedRoute,
              private videosService: VideosService) { }

  ngOnInit(): void {
    // Recuperar los parámetros de ruta enviados a este componente
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getVideo(this.id)
    })
  }

  getVideo(id: number) {
    this.videosService.getVideo(id).subscribe(video => {
      // La respuesta es un arreglo con un solo objeto
      this.video = video[0];
    })
  }

  getUrlVideo(videoName: string): string {
    const URL_SERVER = 'http://localhost:8888/Backend/services-angular-videos/uploads/videos/';
    return `${URL_SERVER}${videoName}`;
  }
}
