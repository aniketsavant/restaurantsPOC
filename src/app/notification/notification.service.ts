import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = './assets/notificationJson/';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }

  notificationList(): Observable<any> {
    return this.http.get(API_URL + `notificationList.json`);
  }

  offerImage(): Observable<any> {
    return this.http.get(API_URL + `offerImage.json`);
  }
}
