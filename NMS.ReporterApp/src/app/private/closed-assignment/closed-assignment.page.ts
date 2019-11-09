import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ViewAssignmentComponent } from '../../components/view-assignment/view-assignment.component';
import { FootagePortalComponent } from '../../components/footage-portal/footage-portal.component';
import {SingleAssignmentPage} from '../single-assignment/single-assignment.page';
import { HttpServiceProvider } from 'src/app/shared/providers/http.service';
import { AssignmentDTO } from 'src/app/shared/models';

@Component({
  selector: 'app-closed-assignment',
  templateUrl: './closed-assignment.page.html',
  styleUrls: ['./closed-assignment.page.scss'],
})
export class ClosedAssignmentPage implements OnInit {
  assignmentDTO: AssignmentDTO[];
  constructor(public  modalCtrl: ModalController , public navCtrl: NavController,private httpService:HttpServiceProvider) { 

    this.navCtrl = navCtrl;
    this.getAssignmentByUserId();
  }

  ngOnInit() {

  }
  getAssignmentByUserId()
  {
    this.httpService.getAssignmentByUserId()
    .subscribe((data:any)=>{
      console.log(data)
      this.assignmentDTO = data.Assignments;
    });
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
