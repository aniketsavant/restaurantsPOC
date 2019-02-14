import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';

import { IonicModule } from '@ionic/angular';

import { RestaurantPage } from './restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'restaurant-details',
    loadChildren: './restaurant-details/restaurant-details.module#RestaurantDetailsPageModule'
  },
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RestaurantPage]
})
export class RestaurantPageModule { }
