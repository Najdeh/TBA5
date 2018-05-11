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

  url: 'http://localhost:8080'
  userData: object = {
    username: '',
    email: '',
    password: ''
  }
  datas: any;

  options = new RequestOptions({ withCredentials: true });
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
    console.log(this.userData);
    this.http.post('http://localhost:8080/register', this.userData).subscribe(
      data => {
        console.log(data);
        this.errorHandling(data);
      });

  }
  login() {
    this.http.post('http://localhost:8080' + '/login', this.userData, this.options)
      .subscribe(data => {
        console.log(data['_body']);
      });
  }

  logout() {
    this.http.get('http://localhost:8080' + '/logout', this.options)
      .subscribe(data => {
        console.log(data['_body']);
      });
  }
}


