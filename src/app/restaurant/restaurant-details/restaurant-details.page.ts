import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
})
export class RestaurantDetailsPage implements OnInit {
  seg;
  constructor() { }

  ngOnInit() {
    this.seg = 'details';
  }
  segmentChanged(event) {
    console.log(event);
  }
}
