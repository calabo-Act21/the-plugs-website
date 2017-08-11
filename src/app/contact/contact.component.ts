import { Component, OnInit, Input } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() title;
  name: string;
  email: string;
  message: string;
  constructor(private http: Http) { }

  ngOnInit() {
  }

  send() {
    if (this.canSend()) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      const postOptions = new RequestOptions({ headers: headers });
      const content = `name=${this.name}&email=${this.email}&message=${this.message}`;
      this.http.post(environment.contactUrl, content, postOptions).subscribe(res => {
        this.name = null;
        this.email = null;
        this.message = null;
      });
    }
  }

  canSend() {
    return this.name && this.email && this.message;
  }
}
