import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { VideosComponent } from './videos/videos.component';
import { PhotosComponent } from './photos/photos.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    VideosComponent,
    PhotosComponent,
    NewsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
