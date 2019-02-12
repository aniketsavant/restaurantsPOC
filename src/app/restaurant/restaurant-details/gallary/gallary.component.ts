import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
  images = [];
  path = '../../../../assets/gallary/';
  constructor(private socialSharing: SocialSharing) { }

  ngOnInit() {
    this.images = [{ url: `${this.path}1.jpg` },
    { url: `${this.path}2.JPG` },
    { url: `${this.path}3.jpg` },
    { url: `${this.path}3.jpg` },
    { url: `${this.path}4.jpg` },
    { url: `${this.path}5.jpg` },
    { url: `${this.path}6.jpg` },
    { url: `${this.path}7.jpg` },
    { url: `${this.path}8.jpg` },
    { url: `${this.path}9.jpg` },
    { url: `${this.path}10.jpg` },
    { url: `${this.path}11.jpg` },
    { url: `${this.path}12.jpg` },
    { url: `${this.path}13.jpg` },
    { url: `${this.path}14.jpg` }
    ];
  }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  onShareClick(index) {
    // index = 0;
    console.log(index);
    // var msg = this.compilemsg(index);
    this.socialSharing.share("hello gayatri", null, null, this.images[index].url);
  }
  onCameraClick(){

  }
}
