import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyPointsComponent } from '../components/my-points/my-points.component';

@Component({
  selector: 'app-private',
  templateUrl: './private.page.html',
  styleUrls: ['./private.page.scss'],
})
export class PrivatePage implements OnInit {

  constructor(public  modalCtrl: ModalController) { }

  ngOnInit() {
  }
  myPoints() {
    this.PointModal();
  }
  async PointModal() {
    const modal = await this.modalCtrl.create({component: MyPointsComponent});
    return await modal.present();
  }
}
