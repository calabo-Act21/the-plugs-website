import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { VideosComponent } from './videos/videos.component';
import { PhotosComponent } from './photos/photos.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    VideosComponent,
    PhotosComponent,
    NewsComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    Angular2ImageGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
