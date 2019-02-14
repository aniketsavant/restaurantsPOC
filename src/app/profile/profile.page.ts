import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { File } from '@ionic-native/file/ngx';
import { ControllersService } from '../shared/controllers.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userProfileImage: String;
  profileForm: FormGroup;
  profileData: any;

  constructor(private camera: Camera, private router: Router, private formBuilder: FormBuilder, private file: File,
    public controllersService: ControllersService) { }


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
    if (this.profileData.profilePhotoURL && this.profileData.profilePhotoFileName) {
      this.file.readAsDataURL(this.profileData.profilePhotoURL, this.profileData.profilePhotoFileName).then(res =>
        this.userProfileImage = res
      );
    }
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
      const filename = imageData.substring(imageData.lastIndexOf('/') + 1);
      const path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
      // then use the method reasDataURL  btw. var_picture is ur image variable
      this.file.readAsDataURL(path, filename).then(res =>
        this.userProfileImage = res
      );
      // this.userProfileImage = imageData;
      this.profileForm.value.profilePhotoURL = path;
      this.profileForm.value.profilePhotoFileName = File;
      // If it's base64 (DATA_URL):
      // const base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
      console.log(err);
    });
  }
  /**
   * @description : after edit on save click it stores data in local storage.
   */
  async onSaveClick() {
    this.controllersService.callForAlert('Success', 'Updated Successfully .');
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
