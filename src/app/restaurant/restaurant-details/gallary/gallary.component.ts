import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
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
    private restaurantService: RestaurantService, private camera: Camera) { }
  ngOnInit() {
    this.images = [
      `${this.path}1.jpg`,
      `${this.path}2.JPG`,
      `${this.path}3.jpg`,
      `${this.path}3.jpg`,
      `${this.path}4.jpg`,
      `${this.path}5.jpg`,
      `${this.path}6.jpg`,
      `${this.path}7.jpg`,
      `${this.path}8.jpg`,
      `${this.path}9.jpg`,
      `${this.path}10.jpg`,
      `${this.path}11.jpg`,
      `${this.path}12.jpg`,
      `${this.path}13.jpg`,
      `${this.path}14.jpg`
    ];
  }

  /**
   * @description plays the slide show
   *
   * @param {IonSlides} slides
   * @memberof GallaryComponent
   */
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

  /**
   * @description shares clicked image on social media
   *
   * @param {*} index
   * @memberof GallaryComponent
   */
  onShareClick(index) {
    console.log(this.images[index]);

    const imageName = this.images[index].substring(this.images[index].lastIndexOf('/') + 1);

    console.log(imageName);
    const flag = this.images[index].includes('assets');
    console.log('flag', flag);
    const ROOT_DIRECTORY = 'file:///sdcard//';
    const downloadFolderName = 'tempDownloadFolder';
    if (this.images[index].includes('assets')) {
      // Create a folder in memory location
      this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
        .then((entries) => {
          // Copy our asset/img/FreakyJolly.jpg to folder we created
          this.file.copyFile(this.file.applicationDirectory + 'www/assets/gallary/',
            imageName, ROOT_DIRECTORY + downloadFolderName + '//', imageName)
            .then((entries) => {
              // Common sharing event will open all available application to share
              this.socialSharing.share(`${this.restaurantService.restaurant.restaurant.name} Check delicious food menu of this restaurant`,
                'Subject', ROOT_DIRECTORY + downloadFolderName + '/' + imageName, this.restaurantService.restaurant.restaurant.menu_url)
                .then((entries) => {
                  console.log('success ' + JSON.stringify(entries));
                })
                .catch((error) => {
                  alert('error mesg1 ' + JSON.stringify(error));
                });
            })
            .catch((error) => {
              alert('error mesg2' + JSON.stringify(error));
            });
        })
        .catch((error) => {
          alert('error mesg3' + JSON.stringify(error));
        });
    } else {
      // Common sharing event will open all available application to share
      this.socialSharing.share(`${this.restaurantService.restaurant.restaurant.name} Check delicious food menu of this restaurant`,
      'image', this.images[index], this.restaurantService.restaurant.restaurant.menu_url)
      .then((entries) => {
        console.log('success ' + JSON.stringify(entries));
      })
      .catch((error) => {
        alert('error mesg1 ' + JSON.stringify(error));
      });
    }

  }

  /**
   * @description captures image through device camera and shows it in gallery 
   *
   * @memberof GallaryComponent
   */
  uploadImage() {
    const options: CameraOptions = {
      quality: 100,
      allowEdit: true,
      saveToPhotoAlbum: true,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG,
      destinationType: this.camera.DestinationType.FILE_URI
    };
    this.camera.getPicture(options).then((imageData) => {
      // split the file and the path from FILE_URI result
      const filename = imageData.substring(imageData.lastIndexOf('/') + 1);
      const path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
      this.file.readAsDataURL(path, filename).then(res => this.images.push(res));
    });
  }
}
