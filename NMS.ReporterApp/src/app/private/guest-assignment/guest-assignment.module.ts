import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GuestAssignmentPage } from './guest-assignment.page';

const routes: Routes = [
  {
    path: '',
    component: GuestAssignmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    GuestAssignmentPage
  ]
})
export class GuestAssignmentPageModule {}
