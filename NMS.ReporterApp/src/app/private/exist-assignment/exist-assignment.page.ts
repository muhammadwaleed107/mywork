import { MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ViewAssignmentComponent } from '../../components/view-assignment/view-assignment.component';
import { FootagePortalComponent } from '../../components/footage-portal/footage-portal.component';
import { HttpServiceProvider } from 'src/app/shared/providers/http.service';
import { AssignmentDTO } from 'src/app/shared/models';
import { LocalServiceProvider } from 'src/app/shared/providers/local.service';
@Component({
  selector: 'app-exist-assignment',
  templateUrl: './exist-assignment.page.html',
  styleUrls: ['./exist-assignment.page.scss'],
})
export class ExistAssignmentPage implements OnInit {
  assignmentDTO: AssignmentDTO[];
  constructor(
    public menuCtrl: MenuController,public navCtrl: NavController,public  modalCtrl: ModalController,
    private httpService:HttpServiceProvider,
    public localService : LocalServiceProvider,
  ) { 
    this.navCtrl = navCtrl;
    this.getAssignmentByUserId();
  }

  ngOnInit() { 
    this.menuCtrl.enable(true,'1');
    
  }

  getAssignmentByUserId()
  {
    this.httpService.getAssignmentByUserId()
    .subscribe((data:any)=>{
      console.log(data)
      this.assignmentDTO = data.Assignments;
    });
  }

  openModal(items) {
    this.localService.setSelectedAssigment = items;
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
