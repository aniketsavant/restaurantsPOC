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
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent


  },
  {
    path: 'gallary',
    component: GallaryComponent

  }
];

// const routes: Routes = [
//   {
//     path: '',
//     component: RestaurantDetailsPage,
//     children: [
//       {
//         path: 'details',
//         children: [
//           {
//             path: '',
//             component: DetailsComponent
//           }
//         ]
//       },
//       {
//         path: 'reviews',
//         children: [
//           {
//             path: '',
//             component: ReviewsComponent

//           }
//         ]
//       },
//       {
//         path: 'gallary',
//         children: [
//           {
//             path: '',
//            component: GallaryComponent
//           }
//         ]
//       },
//       {
//         path: '',
//         redirectTo: '/tabs/restaurants/restaurent-details/details',
//         pathMatch: 'full'
//       }
//     ]
//   }
// ];

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
