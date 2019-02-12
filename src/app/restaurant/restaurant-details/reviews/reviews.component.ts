import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../restaurant.service';
import { LoadingController } from '@ionic/angular';

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

  constructor(private restaurantService: RestaurantService, private loaderCtrl: LoadingController) { }

  async  ngOnInit() {
    const loader = await this.loaderCtrl.create({
      message: 'Loading Reviews'
    });
    this.likeStyle = 'none';
    this.dislikeStyle = 'none';
    loader.present();
    const rest_id = this.restaurantService.restaurant.restaurant.R.res_id;
    this.restaurantService.getReviews(rest_id).subscribe(
      data => {
        console.log(data);
        this.reviewsList = data;
        this.reviewsList = this.reviewsList.user_reviews;
        this.reviewsList.forEach((element, index) => {
          element.likeStyle = this.likeStyle;
          element.dislikeStyle = this.dislikeStyle;
        });
        console.log('reviews:', this.reviewsList);
      }
    );
    loader.dismiss();
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
