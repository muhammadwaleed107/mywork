import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DigitalPortalPage } from './digital-portal.page';

const routes: Routes = [
  {
    path: '',
    component: DigitalPortalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DigitalPortalPage]
})
export class DigitalPortalPageModule {}
