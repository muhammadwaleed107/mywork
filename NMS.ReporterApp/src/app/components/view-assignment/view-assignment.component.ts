import { Component, OnInit } from '@angular/core';
import {ToastController,ModalController} from '@ionic/angular';

@Component({
  selector: 'app-view-assignment',
  templateUrl: './view-assignment.component.html',
  styleUrls: ['./view-assignment.component.scss']
})
export class ViewAssignmentComponent implements OnInit {

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
