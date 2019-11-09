import { Component, OnInit } from '@angular/core';
import { HttpServiceProvider } from 'src/app/shared/providers/http.service';
import { NotificationDTO } from 'src/app/shared/models';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.page.html',
  styleUrls: ['./notification-page.page.scss'],
})
export class NotificationPagePage implements OnInit {
  notificatioNData: NotificationDTO[];
  constructor(
    private httpService: HttpServiceProvider,
    private navCtrl: NavController
  ) {
    this.getnotificationpointer();
  }

  ngOnInit() {
  }
  getnotificationpointer() {

    this.httpService.getUserNotification()
      .subscribe((data: any) => {
        if (data) {
          this.notificatioNData = data.UserNotifications;
        }
      });
  }
  ScreenView(data) {
    // this.notificatioNData.forEach(x => {
    //   console.log(x.ScreenId);
    // });
    // console.log(data.ScreenId);
    if (data.ScreenId === 1) {
      this.navCtrl.navigateForward('/home');
    } else if (data.ScreenId === 2) {
      this.navCtrl.navigateForward('/home/exist-assignment');
    } else if (data.ScreenId === 3) {
      this.navCtrl.navigateForward('/home/guest-assignment');
    }

  }
}
