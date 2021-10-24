import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoListComponent } from './components/video-list/video-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Necesario para hacer uso del servicio HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
