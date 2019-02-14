import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../iRestaurants';
import { RestaurantService } from '../../restaurant.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  restaurant: Restaurant;
  constructor(private restaurantService: RestaurantService) { }

   ngOnInit() {
    this.restaurant = this.restaurantService.restaurant;
  }

}
