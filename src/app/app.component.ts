import { Component, HostListener, OnInit } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sections = [
    { id: 'album', label: 'Nouvel Album !', title: 'Album' },
    { id: 'videos', label: 'Vidéos', title: 'Vidéos' },
    { id: 'photos', label: 'Photos', title: 'Photos' },
    { id: 'news', label: 'Actualités', title: 'Actualités' },
    { id: 'contact', label: 'Contactez nous !', title: 'Contact' }
  ];

  ngOnInit(): void {
    setTimeout(function () {
      // discard splash screen
      document.getElementsByTagName('body').item(0).classList.toggle('loaded');
    }, 1000);
  }
}
