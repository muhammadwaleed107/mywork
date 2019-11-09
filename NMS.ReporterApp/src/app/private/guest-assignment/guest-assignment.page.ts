import { Component, OnInit } from '@angular/core';
import { HttpServiceProvider } from 'src/app/shared/providers/http.service';
import { StorageKey } from 'src/app/shared/enums/storagekey';
import { StorageServiceProvider } from 'src/app/shared/providers/stroage.service';
import { User, ApiResponse } from 'src/app/shared/models';
import { UtilitiesServiceProvider } from 'src/app/shared/providers/utilities.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-guest-assignment',
  templateUrl: './guest-assignment.page.html',
  styleUrls: ['./guest-assignment.page.scss'],
})
export class GuestAssignmentPage implements OnInit {

  public guests: any[];

  constructor(
    public http: HttpServiceProvider,
    public storage: StorageServiceProvider,
    public util: UtilitiesServiceProvider,
    public navCtrl: NavController
  ) {

  }

  ngOnInit() {
    let user: User = this.storage.getProperty(StorageKey.User);
    this.http.getGuestAssignmentByUserId(user.id)
      .subscribe((response: ApiResponse) => {
        if (response.IsSuccess) {
          this.guests = response.Data || [];
        }
      });
  }


  getTimeFromNow(str) {
    return this.util.getTimeFromNow(str);
  }

  getDateByFormat(str, format) {
    return this.util.getDateByFormat(str, format);
  }

  navTo(url: string, guest:any) {
    this.storage.currentGuest = guest;
    this.navCtrl.navigateForward(url);
  }
}
