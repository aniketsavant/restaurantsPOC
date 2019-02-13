import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  regData: any;
  loginForm: FormGroup;

  constructor(private router: Router, public alertController: AlertController, private formBuilder: FormBuilder) { }

  /**
   * @description : creating login form and accessing the registered value from local storage.
   */
  ngOnInit() {
    this.regData = '';
    this.loginForm = this.formBuilder.group({
      uName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.loginForm.patchValue({
      uName: '',
      password: ''
    });
  }

  /**
   * @description : on login click for checking the credentials.
   */
  async onLoginClick() {
    // if (this.regData === null) {
    //   const alert = await this.alertController.create({
    //     header: 'Alert',
    //     message: 'Please register first',
    //     buttons: [
    //       {
    //         text: 'OK',
    //         role: 'OK',
    //         cssClass: 'secondary',
    //         handler: (blah) => {
    //           this.router.navigate(['register']);
    //         }
    //       },
    //       {
    //         text: 'Cancel',
    //         handler: () => {
    //           console.log('Confirm Okay');
    //         }
    //       }
    //     ]

    //   });
    //   await alert.present();
    // } else 
    this.regData = JSON.parse(localStorage.getItem('registerData'));
    if (this.loginForm.value.uName === this.regData.uName && this.loginForm.value.password === this.regData.password) {
      this.router.navigate(['tabs']);
    } else {
      const alert = await this.alertController.create({
        header: 'Alert',
        // subHeader: 'Oops',
        message: 'Wrong credential.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
