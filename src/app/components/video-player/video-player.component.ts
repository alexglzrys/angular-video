import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVideo } from 'src/app/interfaces/video';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @ViewChild('videoPlayer') player!: ElementRef;
  video!: IVideo
  id!: number
  duration!: string
  current!: string
  progreso!: number

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

  play() {
    this.player.nativeElement.play()
  }

  pause() {
    this.player.nativeElement.pause();
  }

  stop() {
    this.player.nativeElement.pause();
    this.player.nativeElement.currentTime = 0
  }

  // Obtener metainformaciòn del video referenciado en el elemento video de HTML
  onMetadata(event: Event, video: HTMLVideoElement) {
    console.log(video)
    let minutos = Math.floor(video.duration / 60);
    let segundos = Math.floor(video.duration) - (minutos * 60);
    let minStr = ''+minutos, secStr=''+segundos;
    if (minutos < 10) minStr = 0 + '' + minutos
    if (segundos < 10) secStr = 0 + '' + segundos;
    this.duration = minStr + ':' + secStr;
  }

  // Obtener información en tiempo real del estado de reproducción del video
  onTimeUpdate(event: Event, video:HTMLVideoElement) {
    this.progreso = Math.floor(video.currentTime * 100 / video.duration)

    let minutos = Math.floor(video.currentTime / 60);
    let segundos = Math.floor(video.currentTime) - (minutos * 60);
    let minStr = ''+minutos, secStr=''+segundos;
    if (minutos < 10) minStr = 0 + '' + minutos
    if (segundos < 10) secStr = 0 + '' + segundos;
    this.current = minStr + ':' + secStr;
  }

}
