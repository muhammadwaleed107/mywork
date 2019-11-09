import { ExistNewsPageModule } from './exist-news/exist-news.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrivatePage } from './private.page';

const routes: Routes = [
  {
    path: '',
    component: PrivatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // ExistNewsPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrivatePage]
})
export class PrivatePageModule {}
