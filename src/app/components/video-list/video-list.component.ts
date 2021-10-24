import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos!: Array<Object>

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

}
