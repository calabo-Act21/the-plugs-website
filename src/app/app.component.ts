import { Component } from '@angular/core';
import './rxjs-operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sections = [
    { id: 'album', label: 'Album' },
    { id: 'videos', label: 'Vidéos' },
    { id: 'photos', label: 'Photos' },
    { id: 'news', label: 'Actualités' },
    { id: 'contact', label: 'Contact' }
  ];
}
