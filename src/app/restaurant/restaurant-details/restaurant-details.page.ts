import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../iRestaurants';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
})
export class RestaurantDetailsPage implements OnInit {
  restaurant: Restaurant;
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurant = this.restaurantService.restaurant;
    console.log('details', this.restaurant);
  }

}
