import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSlides } from '@ionic/angular';

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
  // onSlideChange(slides: IonSlides) {
  //   slides.getActiveIndex().then(index => {
  //     console.log(index);
  //     if (index === 0) { this.seg = 'details'; }
  //     if (index === 1) { this.seg = 'reviews'; }
  //     if (index === 2) { this.seg = 'gallary'; }
  //   });
  // }
}
