import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestaurantPage } from './restaurant.page';
import { RestaurantDetailsPage } from './restaurant-details/restaurant-details.page';
import { ReviewsComponent } from './restaurant-details/reviews/reviews.component';
import { GallaryComponent } from './restaurant-details/gallary/gallary.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantPage,
    // children: [
    //   {
    //     path: 'restaurant-details',
    //     loadChildren: './restaurant-details/restaurant-details.module#RestaurantDetailsPageModule'
    //   },
    //   {
    //     path: '',
    //     redirectTo: '/tabs/restaurants/restaurant-details',
    //     pathMatch: 'full'
    //   }
    // ]
  },
  {
    path: 'restaurant-details',
    component: RestaurantDetailsPage,
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'details',
    component: GallaryComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RestaurantPage, RestaurantDetailsPage, ReviewsComponent, GallaryComponent]
})
export class RestaurantPageModule { }
