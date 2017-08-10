import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  constructor(private http: Http) { }

  ngOnInit() {
  }

  send() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    const postOptions = new RequestOptions({ headers: headers });
    const content = `name=${this.name}&email=${this.email}&message=${this.message}`;
    this.http.post('/angular/assets/bin/contact_me.php', content, postOptions).subscribe(res => {
      console.log(res);
      this.name = null;
      this.email = null;
      this.message = null;
    });
  }
}
