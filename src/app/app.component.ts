import { Component, HostListener, OnInit } from '@angular/core';
import './rxjs-operators';
import { VideosService } from './videos/videos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [VideosService]

})
export class AppComponent implements OnInit {
  videos: any[];
  sections = [
    { id: 'album', label: 'Nouveau Single : Wise Monkey !', title: 'Album' },
    { id: 'videos', label: 'Vidéos', title: 'Vidéos' },
    { id: 'news', label: 'Actualités', title: 'Actualités' },
    { id: 'photos', label: 'Photos', title: 'Photos' },
    { id: 'contact', label: 'Contactez nous !', title: 'Contact' }
  ];

  constructor(private api: VideosService) { }

  ngOnInit(): void {
    setTimeout(function () {
      this.api.getVideos().subscribe(videos => {
        this.videos = videos;
        // discard splash screen
        document.getElementsByTagName('body').item(0).classList.toggle('loaded');
      });
    }.bind(this), 1000);
  }
}
