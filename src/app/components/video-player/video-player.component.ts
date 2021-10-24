import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVideo } from 'src/app/interfaces/video';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  video!: IVideo
  id!: number

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Recuperar los parámetros de ruta enviados a este componente
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }

}
