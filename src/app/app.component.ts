import { Component, HostListener, OnInit } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sections = [
    { id: 'album', label: 'Album' },
    { id: 'videos', label: 'Vidéos' },
    { id: 'photos', label: 'Photos' },
    { id: 'news', label: 'Actualités' },
    { id: 'contact', label: 'Contact' }
  ];

  ngOnInit(): void {
    setTimeout(function () {
      // discard splash screen
      document.getElementsByTagName('body').item(0).classList.toggle('loaded');
    }, 1000);
  }
}
