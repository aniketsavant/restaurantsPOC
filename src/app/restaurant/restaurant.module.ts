import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestaurantPage } from './restaurant.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: RestaurantPage,
  //   children: [
      {
        path: '',
        component: RestaurantPage
      },
      {
        path: 'restaurant-details',
        loadChildren: './restaurant-details/restaurant-details.module#RestaurantDetailsPageModule'
        // children: [
        //   {
        //     path: '',
        //     loadChildren: './restaurant-details/restaurant-details.module#RestaurantDetailsPageModule'
        //   }
        // ]
      },
      // {
      //   path: '',
      //   redirectTo: '/tabs/restaurants',
      //   pathMatch: 'full'
      // }
  //   ]
  // },
  // {
  //   path: 'restaurant-details',
  //   // component: RestaurantDetailsPage,
  //   loadChildren: './restaurant-details/restaurant-details.module#RestaurantDetailsPageModule'
  //   //     {
  //   //       path: '',
  //   //       component: RestaurantDetailsPage,
  //   //     },
  //   //     {
  //   //       path: 'reviews',
  //   //       component: ReviewsComponent
  //   //     }
  //   //   ]
  // },
  // // {
  // //   path: 'reviews',
  // //   component: ReviewsComponent
  // // },
  // {
  //   path: 'details',
  //   component: GallaryComponent
  // }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RestaurantPage,]
})
export class RestaurantPageModule { }
