import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../iRestaurants';
import { RestaurantService } from '../../restaurant.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  restaurant: Restaurant;
  constructor(private restaurantService: RestaurantService, private loderCtrl: LoadingController) { }

   ngOnInit() {
    // const loader = await this.loderCtrl.create({
    //   message: 'loading restaurents'
    // });
    this.restaurant = this.restaurantService.restaurant;
    // loader.present();

    // loader.dismiss();
  }

}
