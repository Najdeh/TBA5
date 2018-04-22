import { Component } from '@angular/core';

//én részem
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';
import { checkAndUpdateElementDynamic } from '@angular/core/src/view/element';
//eddig
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //én részem
  url: 'http://localhost:8080'
  userData: object = {
    userName: 'String',
    email: 'String',
    password: 'String'
  }
  datas: any;
  constructor(public http: Http) {
  }

  errorHandling(res) {
    res = JSON.parse(res['_body']);
    if (res.error) {
      console.error('API error:' + res.error);
    }
    else {
      this.datas = res;
    }
  }

  register() {
    this.http.post(this.url + '/register', this.userData).subscribe(
      data => {
        console.log(data);
        this.errorHandling(data);
      });
  }
  //eddig
}