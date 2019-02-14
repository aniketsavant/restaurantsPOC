import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private alertController: AlertController) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const profileData = JSON.parse(localStorage.getItem('registerData'));

    // In that we are checking wether profile data present in local storage or not ; otherwise redirected to login after data loss.
    if (profileData != null) {
      return true;
    } else {
      this.alertCall();
      this.router.navigate(['']);
    }

  }

  async alertCall() {
    const alert = await this.alertController.create({
      header: 'Oops',
      // subHeader: 'Oops',
      message: 'Data Loss..',
      buttons: ['OK']
    });
    await alert.present();
  }

}
