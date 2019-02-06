import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit() {
    this.isToggled = true;
  }

}
