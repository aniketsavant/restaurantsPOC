import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userProfileImage: String;
  profileForm: FormGroup;
  profileData: any;

  constructor(private camera: Camera, private router: Router, private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.userProfileImage = 'assets/jpg.jpg';
    this.profileForm = this.formBuilder.group({
      // userPhoto: [''],
      uName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      discription: ['', Validators.required],
    });
    this.profileData = JSON.parse(localStorage.getItem('registerData'));
    // this.profileForm.assign(this.profileData);
    this.profileForm.patchValue({
      uName: this.profileData.uName,
      emailId: this.profileData.emailId,
      password: this.profileData.password,
      discription: this.profileData.description
    });
    console.log(this.profileForm);
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
    }, (err) => {
      // Handle error
    });
  }
  /**
   * @description : after edit on save click it stores data in local storage.
   */
  public onSaveClick() {
    localStorage.setItem('registerData', JSON.stringify(this.profileForm.value));
  }
  /**
   * @description : on logout click; navigate to login page
   */
  public onLogoutClick() {
    // localStorage.clear();
    this.router.navigate(['']);
  }

}
