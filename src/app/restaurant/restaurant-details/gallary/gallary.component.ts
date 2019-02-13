import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { RestaurantService } from '../../restaurant.service';
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {
  images = [];
  path = '../../../../assets/gallary/';
  constructor(private socialSharing: SocialSharing, private file: File,
    private restaurantService: RestaurantService) { }

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
  // this.socialSharing.share('hello gayatri', null, null, this.images[index].url);

  const imageName = `${index + 1}.jpg`;
  const ROOT_DIRECTORY = 'file:///sdcard//';
  const downloadFolderName = 'tempDownloadFolder';

  // Create a folder in memory location
  this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
    .then((entries) => {

      // Copy our asset/img/FreakyJolly.jpg to folder we created
      this.file.copyFile(this.file.applicationDirectory + 'www/assets/gallary/',
        imageName, ROOT_DIRECTORY + downloadFolderName + '//', imageName)
        .then((entries) => {
          // Common sharing event will open all available application to share
          this.socialSharing.share(`${ this.restaurantService.restaurant.restaurant.name} Check delicious food menu of this restaurent`,
          'Subject', ROOT_DIRECTORY + downloadFolderName + "/" + imageName, this.restaurantService.restaurant.restaurant.menu_url)
            .then((entries) => {
              console.log('success ' + JSON.stringify(entries));
            })
            .catch((error) => {
              alert('error ' + JSON.stringify(error));
            });
        })
        .catch((error) => {
          alert('error ' + JSON.stringify(error));
        });
    })
    .catch((error) => {
      alert('error ' + JSON.stringify(error));
    });
}
onCameraClick() {

}
}
