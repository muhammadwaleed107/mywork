import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HappeningCalenderPage } from './happening-calender.page';

const routes: Routes = [
  {
    path: '',
    component: HappeningCalenderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HappeningCalenderPage]
})
export class HappeningCalenderPageModule {}
