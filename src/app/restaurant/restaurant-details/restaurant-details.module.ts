import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RestaurantDetailsPage } from './restaurant-details.page';
import { ReviewsComponent } from './reviews/reviews.component';
import { GallaryComponent } from './gallary/gallary.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [

  {
    path: '',
    component: RestaurantDetailsPage,
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RestaurantDetailsPage, ReviewsComponent, GallaryComponent, DetailsComponent]
})
export class RestaurantDetailsPageModule { }
