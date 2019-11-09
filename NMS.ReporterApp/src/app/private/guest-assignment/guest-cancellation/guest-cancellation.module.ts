import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GuestCancellationPage } from './guest-cancellation.page';

const routes: Routes = [
  {
    path: '',
    component: GuestCancellationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GuestCancellationPage]
})
export class GuestCancellationPageModule {}
