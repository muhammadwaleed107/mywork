import { Component, OnInit, Input } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-beats',
  templateUrl: './beats.component.html',
  styleUrls: ['./beats.component.scss']
})
export class BeatsComponent implements OnInit {
  @Input() types;
  constructor(
    public toastController: ToastController,
     public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.types);
  }
  close(type) {
    this.modalController.dismiss({
      'type': type
    });
    this.modalController.dismiss();
  }
}
