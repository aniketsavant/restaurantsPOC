import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  reviewsList;
  dislikeCount: number;
  likeCount: number;
  likeStyle: string;
  dislikeStyle: string;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.likeStyle = 'none';
    this.dislikeStyle = 'none';
    // alert('hello-reviews');
    const rest_id = this.restaurantService.restaurant.restaurant.R.res_id;
    console.log('details of restau:', this.restaurantService.restaurant.restaurant.R.res_id);
    this.restaurantService.getReviews(rest_id).subscribe(
      data => {
        console.log(data);
        this.reviewsList = data;
        this.reviewsList = this.reviewsList.user_reviews;
        this.reviewsList.forEach((element, index) => {
          element.likeCount = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
          element.dislikeCount = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
          element.likeStyle = this.likeStyle;
          element.dislikeStyle = this.dislikeStyle;
        });
        console.log('reviews:', this.reviewsList);
      }
    );
  }

  /**
   * @discription : on like button click
   */
  public onLikeClick(row, i) {
    this.reviewsList[i].likeCount++;
    this.reviewsList[i].likeStyle = 'clickedStyle';
  }

  /**
   * @discription : on dislike button click
   */
  public onDislikeClick(row, i) {
    this.reviewsList[i].dislikeCount++;
    this.reviewsList[i].dislikeStyle = 'clickedStyle';
  }
}
