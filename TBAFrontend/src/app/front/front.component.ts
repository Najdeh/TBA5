import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  restaurants: object = {
    name: "",
    type: "",
    price: "",
    freeTables: Number,
    tablesForBook: 1
  }

  modalCounter = 5;
  actualChoosenResto = "";

  mexican = [];
  lebanese = [];
  chinese = [];
  turkish = [];
  japanese = [];
  vietnamese = [];

  constructor(public http: Http) { }

  ngOnInit() {
    this.getRestaurants()
  }


  getRestaurants() {
    this.http.get('http://localhost:8080/restaurants').subscribe(
      data => {
        this.restaurants = JSON.parse(data['_body']);
        //console.log(this.restaurants);
        this.catResto()
        console.log(this.restaurants);
      });
  }

  catResto() {
    for (let k in this.restaurants) {
      if (this.restaurants[k].type == 'mexican') {
        this.mexican.push(this.restaurants[k])
      }
      if (this.restaurants[k].type == 'lebanese') {
        this.lebanese.push(this.restaurants[k])
      }
      if (this.restaurants[k].type == 'chinese') {
        this.chinese.push(this.restaurants[k])
      }
      if (this.restaurants[k].type == 'turkish') {
        this.turkish.push(this.restaurants[k])
      }
      if (this.restaurants[k].type == 'japanese') {
        this.japanese.push(this.restaurants[k])
      }
      if (this.restaurants[k].type == 'vietnamese') {
        this.vietnamese.push(this.restaurants[k])
      }
    }
  }

  choosenResto(data) {
    this.actualChoosenResto = data;
    console.log(this.actualChoosenResto);
  }
}
