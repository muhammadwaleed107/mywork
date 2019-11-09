import { User } from 'src/app/shared/models';
import { Component, OnInit } from '@angular/core';
import { LocalServiceProvider } from '../../shared/providers/local.service';
import { NavController } from '@ionic/angular';
import { Broadcaster } from '../../shared/broadcaster';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    public localService : LocalServiceProvider,
    public navCtrl : NavController,
    public broaCaster: Broadcaster
  ) { 
    let user: User = this.localService.getUserid;
    if (!user) {
      this.navCtrl.navigateRoot('/sign-in');
    }
  }

  ngOnInit() {
    this.broaCaster.broadcast('menuLoad')
  }

}
