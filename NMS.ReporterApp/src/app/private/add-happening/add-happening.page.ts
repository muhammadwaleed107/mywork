import { BeatsComponent } from './../../components/beats/beats.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-happening',
  templateUrl: './add-happening.page.html',
  styleUrls: ['./add-happening.page.scss'],
})
export class AddHappeningPage implements OnInit {
  selectedSlug = "CR";
  constructor(
    public modalCtrl : ModalController
  ) { }

  ngOnInit() {
  }
  async SelectSlug() {
    const modal = await this.modalCtrl.create({
      component: BeatsComponent, componentProps: {
        types: [{ value: 'CRIME' }, { value: 'COURT' }, { value: 'POLITICS' }],
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();
    if (data) {
      this.selectedSlug = data.type;
    }
  }
}
