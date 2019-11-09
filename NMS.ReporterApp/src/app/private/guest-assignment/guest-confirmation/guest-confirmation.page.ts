import { Component, OnInit } from '@angular/core';
import { StorageServiceProvider } from 'src/app/shared/providers/stroage.service';
import { NavController } from '@ionic/angular';
import { GuestInfo } from 'src/app/shared/models/guest-info';
import { UtilitiesServiceProvider } from 'src/app/shared/providers/utilities.service';

@Component({
  selector: 'app-guest-confirmation',
  templateUrl: './guest-confirmation.page.html',
  styleUrls: ['./guest-confirmation.page.scss'],
})
export class GuestConfirmationPage implements OnInit {

  public selectedDsng: string;
  public guestInfo: GuestInfo = new GuestInfo();
  constructor(
    public storage: StorageServiceProvider,
    public nav: NavController,
    public util:UtilitiesServiceProvider
  ) {
    this.selectedDsng = "";
  }

  ngOnInit() {
    this.guestInfo = this.storage.currentGuest;
    if (!this.guestInfo.GuestName) {
      this.nav.navigateBack("/home/guest-assignment");
    }
    console.log(this.storage.currentGuest);
  }



  getTimeFromNow(str) {
    return this.util.getTimeFromNow(str);
  }

  getDateByFormat(str, format) {
    return this.util.getDateByFormat(str, format);
  }

}
