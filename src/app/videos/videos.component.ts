import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { VideosService } from './videos.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  @Input() title;
  @Input() videos: any[];
  constructor() { }

  ngOnInit() {
  } 
}
