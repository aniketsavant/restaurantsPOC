import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  slideOpts = {
    effect: 'flip'
  };
  public isToggled: boolean;
  offerData: Object;
  offerImages: any;

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.isToggled = true;
    this.getNotificationList();
    this.getOfferList();
  }

  /**
   * @description : for getting offer list
   */
  public getNotificationList() {
    this.notificationService.notificationList().subscribe(data => {
      if (data) {
        this.offerData = data;
        // console.log(this.offerData);
      }
    },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      });
  }

  /**
  * @description : for getting offer images
  */
  public getOfferList() {
    this.notificationService.offerImage().subscribe(data => {
      if (data) {
        this.offerImages = data;
        // console.log(this.offerData);
      }
    },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      });
  }

}
