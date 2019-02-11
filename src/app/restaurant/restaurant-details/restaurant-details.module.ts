import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestaurantDetailsPage } from './restaurant-details.page';
import { ReviewsComponent } from './reviews/reviews.component';
import { GallaryComponent } from './gallary/gallary.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantDetailsPage,
    pathMatch: 'full'
    //  children: [
    //   {
    //     path: 'reviews',
    //     component: ReviewsComponent
    //   }]
  },
  {
      path: '/reviews',
      component: ReviewsComponent
  }
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
export class RestaurantDetailsPageModule {}
