import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { IRestaurantCollection, Restaurant } from './iRestaurants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  searchtext: string;
  city_id;
  restaurants_collection: Restaurant[];
  icon = 'heart-empty';
  iflag = false;
  favouriteList;
  data = [{
    name: 'pune',
    id: '5'
  },
  {
    name: 'mumbai',
    id: '1'
  },
  {
    name: 'patna',
    id: '40'
  }];
  selectedData;
  constructor(private restaurantService: RestaurantService, private router: Router) {
  }

  ngOnInit() { }

  search() {
    // console.log('data', this.data);
    this.selectedData = this.data.filter(a => {
      console.log(this.searchtext);
      console.log(a.name.includes(this.searchtext));
      return a.name.includes(this.searchtext);
    });
    console.log('data', this.data);
  }
  onItemClick(res) {
    this.searchtext = res.name;
    this.city_id = res.id;
    this.restaurantService.getRestaurants(this.city_id).subscribe(
      (data: IRestaurantCollection) => {
        this.restaurants_collection = data.restaurants;
        for (const obj of this.restaurants_collection) {
          obj.restaurant.icon = 'heart-empty';
          obj.restaurant.favourite = false;
        }
      },
      error => console.error('Error is', error)
    ),
      this.selectedData = [];

  }
  removeFocus() {
    this.selectedData = [];
  }
  changeIcon(event, index) {
    if (this.restaurants_collection[index].restaurant.favourite) {
      this.restaurants_collection[index].restaurant.favourite = false;
      this.restaurants_collection[index].restaurant.icon = 'heart-empty';
    } else {
      this.restaurants_collection[index].restaurant.favourite = true;
      this.restaurants_collection[index].restaurant.icon = 'heart';
      this.iflag = true;
    }
    // return event;
  }
  onCardClick(res) {
    this.restaurantService.setData(res);
    this.router.navigate(['/tabs/restaurants/restaurant-details']);
  }
}

