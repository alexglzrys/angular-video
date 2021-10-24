import { Component, OnInit } from '@angular/core';
import { IVideo } from 'src/app/interfaces/video';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos!: Array<IVideo>

  // Inyectar el servicio de videos
  constructor(private videosService: VideosService) { }

  ngOnInit(): void {
    this.getAllVideos()
  }

  getAllVideos() {
    this.videosService.getAllVideos().subscribe(response => {
      this.videos = response
      console.log(this.videos)
    }, (error) => {
      console.log(error)
    })
  }

  getUrlImage(imageName: string): string {
    const URL_SERVER = 'http://localhost:8888/Backend/services-angular-videos/uploads/';
    return `${URL_SERVER}${imageName}`;
  }

}
