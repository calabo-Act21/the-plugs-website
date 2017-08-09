import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  sections = [
    { id: 'album', label: 'Album' },
    { id: 'videos', label: 'Vidéos' },
    { id: 'photos', label: 'Photos' },
    { id: 'news', label: 'News' }
  ];
}
