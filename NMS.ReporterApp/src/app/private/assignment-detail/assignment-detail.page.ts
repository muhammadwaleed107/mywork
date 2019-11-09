import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ViewAssignmentComponent } from '../../components/view-assignment/view-assignment.component';
import { FootagePortalComponent } from '../../components/footage-portal/footage-portal.component';
import {SingleAssignmentPage} from '../single-assignment/single-assignment.page';


@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.page.html',
  styleUrls: ['./assignment-detail.page.scss'],
})
export class AssignmentDetailPage implements OnInit {

  constructor(public  modalCtrl: ModalController , public navCtrl: NavController) { 

    this.navCtrl = navCtrl;
  }

  ngOnInit() {

  }

  openModal() {
    this.navCtrl.navigateForward('/home/single-assignment');

  }
  openSecondModal() {
    this.presentSecondModal();

  }
  async presentFirstModal() {
    const modal = await this.modalCtrl.create({component: ViewAssignmentComponent});
    return await modal.present();
  }
  async presentSecondModal() {
    const modal = await this.modalCtrl.create({component: FootagePortalComponent});
    return await modal.present();
  }
}
