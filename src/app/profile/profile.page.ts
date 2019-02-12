import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userProfileImage: String;

  constructor(private camera: Camera) { }


  ngOnInit() {
    this.userProfileImage = 'assets/jpg.jpg';
  }

  /**
   * @description event call to take photos from gallery and change your profile image.
   */
  public onTakePhotoClick() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      this.userProfileImage = imageData;
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      // console.log(base64Image);
    }, (err) => {
      // Handle error
    });
  }

}
