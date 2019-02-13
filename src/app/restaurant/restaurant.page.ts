import { Component, OnInit, AfterViewInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { IRestaurantCollection, Restaurant } from './iRestaurants';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {
  NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult,
  NativeGeocoderOptions
} from '@ionic-native/native-geocoder/ngx';


/**
 * @description shows list of restaurents by cities
 *
 * @export
 * @class RestaurantPage
 * @implements {OnInit}
 */
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  searchtext: string;
  city_id;
  restaurants_collection: Restaurant[];
  favouriteList;
  lattitude;
  longitude;
  cityList = [{
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
  loader;
  constructor(private restaurantService: RestaurantService, private router: Router, private loderCtrl: LoadingController,
    private geolocation: Geolocation, private nativeGeocoder: NativeGeocoder) {
  }

  /**
   *
   *
   * @memberof RestaurantPage
   */
  ngOnInit() {
    this.getLocation();
    // this.getNearByRestaurents();
  }

  /**
   * @description gets current location co-ordinates
   *
   * @memberof RestaurantPage
   */
  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lattitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.getNearByRestaurents();
      this.getLocationDetails();
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.lattitude = data.coords.latitude;
      this.longitude = data.coords.longitude;
      this.getNearByRestaurents();
      this.getLocationDetails();
    });
  }

  /**
   * @description shows current location details
   *
   * @memberof RestaurantPage
   */
  getLocationDetails() {
    const options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(this.lattitude, this.longitude, options)
      .then((result: NativeGeocoderReverseResult[]) => {
        //  this.getNearByRestaurents();
        // alert('this is:' + result[0]); console.log(JSON.stringify(result[0]));
        this.searchtext = result[0].subLocality + ' ' + result[0].subAdministrativeArea + ','
          + result[0].administrativeArea + ',' + result[0].countryName;
      })
      .catch((error: any) => console.log(error));

  }

  /**
   * @description Finds near by restaurents according to given GPS co-ordinates
   *
   * @memberof RestaurantPage
   */
  getNearByRestaurents() {
    this.restaurantService.getNearByRestaurants(this.lattitude, this.longitude).subscribe(
      (data: IRestaurantCollection) => {
        this.restaurants_collection = data.restaurants;
        for (const obj of this.restaurants_collection) {
          obj.restaurant.icon = 'heart-empty';
          obj.restaurant.favourite = false;
        }
      },
      error => console.error('Error is', error)
    );
  }


  /**
   * @description Filters city_list based on serch text
   *
   * @memberof RestaurantPage
   */
  search() {
    if (this.searchtext.length >= 1) {
      this.selectedData = this.cityList.filter(a => {
        return a.name.includes(this.searchtext.toLowerCase());
      });
    }
  }
  async onItemClick(res) {
    this.loader = await this.loderCtrl.create({
      message: 'loading restaurents'
    });
    this.loader.present();
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
    this.loader.dismiss();
  }
  removeFocus() {
    this.selectedData = [];
  }
  changeIcon(index) {
    if (this.restaurants_collection[index].restaurant.favourite) {
      this.restaurants_collection[index].restaurant.favourite = false;
      this.restaurants_collection[index].restaurant.icon = 'heart-empty';
    } else {
      this.restaurants_collection[index].restaurant.favourite = true;
      this.restaurants_collection[index].restaurant.icon = 'heart';
    }
  }
  onCardClick(res) {
    this.restaurantService.setData(res);
    this.router.navigate(['/tabs/restaurants/restaurant-details']);
  }
}

