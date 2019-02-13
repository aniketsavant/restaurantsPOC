import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRestaurantCollection, Restaurant } from './iRestaurants';

const API_KEY = 'f960a46b79a0eba1c0782344e9c51716';
const API_URL = 'https://developers.zomato.com/api/v2.1';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurant: Restaurant;
  favourite_list: number[] = [];
  constructor(private http: HttpClient) { }

  /**
   * @param  {Restaurant} res
   */
  setData(res: Restaurant) {
    this.restaurant = res;
  }

  /**
   * @param {*} city_id
   * @returns
   * @memberof RestaurantService
   */
  getRestaurants(city_id): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'user-key': API_KEY
    });
    const url = API_URL + `/search?entity_id=${city_id}&entity_type=city`;
    return this.http.get(url, { headers });
  }

  /**
   * @param  {} lattitude
   * @param  {} longitude
   */
  getNearByRestaurants(lattitude, longitude): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'user-key': API_KEY
    });
    const url = API_URL + `/search??lat=${lattitude}&lon=${longitude}`;
    return this.http.get(url, { headers });
  }

  /**
   * @param  {} res_id
   */
  getReviews(res_id): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'user-key': API_KEY
    });
    const url = API_URL + `/reviews?res_id=${res_id}`;
    return this.http.get(url, { headers });
  }

}


