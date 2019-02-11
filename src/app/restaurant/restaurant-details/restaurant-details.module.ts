import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestaurantDetailsPage } from './restaurant-details.page';
import { ReviewsComponent } from './reviews/reviews.component';
import { GallaryComponent } from './gallary/gallary.component';

const routes: Routes = [
//   {
//     path: '',
//     component: RestaurantDetailsPage,
//     children: [
      {
        path: '',
        component: RestaurantDetailsPage
      },
      {
        path: 'reviews',
        component: ReviewsComponent

        // children: [
        //   {
        //     path: '',
        //     component: ReviewsComponent
        //   }
        // ]
      },
      {
        path: 'gallary',
        component: GallaryComponent

        // children: [
        //   {
        //     path: '',
        //     component: GallaryComponent
        //   }
        // ]
      },
      // {
      //   path: '',
      //   redirectTo: '/tabs/restaurants/restaurant-details',
      //   pathMatch: 'full'
      // }
    // ]
//   }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RestaurantDetailsPage, ReviewsComponent, GallaryComponent]
})
export class RestaurantDetailsPageModule { }
