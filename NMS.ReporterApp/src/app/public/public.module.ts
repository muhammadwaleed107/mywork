import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PublicPage } from './public.page';
import { SigninPageModule } from './signin/signin.module';

const routes: Routes = [
  {
    path: '',
    component: PublicPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PublicPage]
})
export class PublicPageModule {}
