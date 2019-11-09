import { Component, OnInit } from '@angular/core';
import {ToastController,ModalController} from '@ionic/angular';

@Component({
  selector: 'app-footage-portal',
  templateUrl: './footage-portal.component.html',
  styleUrls: ['./footage-portal.component.scss']
})
export class FootagePortalComponent implements OnInit {
  
  test: string;
  constructor(
   public  toastController:ToastController,public modalController:ModalController
    ) { 
      console.log("hello from test");
    this.test = 'hello world';
  }

  ngOnInit() {
  }
  onClick()
  {
    this.modalController.dismiss();
  }

}
