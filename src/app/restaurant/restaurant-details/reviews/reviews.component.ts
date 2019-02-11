import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  reviewsList;
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    alert('hello-reviews');
    const rest_id = this.restaurantService.restaurant.restaurant.R.res_id;
    console.log('details of restau:', this.restaurantService.restaurant.restaurant.R.res_id);
    this.restaurantService.getReviews(rest_id).subscribe(
      data => {
        console.log(data);
        this.reviewsList = data;
        this.reviewsList = this.reviewsList.user_reviews;
        console.log('reviews:', this.reviewsList);
      }
    );
  }

}
