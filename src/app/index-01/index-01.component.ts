import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-01',
  templateUrl: './index-01.component.html',
  styleUrls: ['./index-01.component.css']
})
export class Index01Component implements OnInit {
  imageUrlArray = [];

  constructor() {
   this.imageUrlArray = [{url:"/assets/images/slider/full-screen/1-100x50.jpg"},{url:"/assets/images/slider/full-screen/1-100x50.jpg"} ];
   }

  ngOnInit() {
  }

}
