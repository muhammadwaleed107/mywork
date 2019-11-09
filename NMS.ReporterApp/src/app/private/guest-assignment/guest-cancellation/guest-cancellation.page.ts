import { Component, OnInit } from '@angular/core';
import { GuestInfo } from 'src/app/shared/models';
import { NavController } from '@ionic/angular';
import { StorageServiceProvider } from 'src/app/shared/providers/stroage.service';
import { UtilitiesServiceProvider } from 'src/app/shared/providers/utilities.service';

@Component({
  selector: 'app-guest-cancellation',
  templateUrl: './guest-cancellation.page.html',
  styleUrls: ['./guest-cancellation.page.scss'],
})
export class GuestCancellationPage implements OnInit {
  public selectedReason: string;
  public guestInfo: GuestInfo = new GuestInfo();
  constructor(
    public nav:NavController,
    public storage:StorageServiceProvider,
    public util:UtilitiesServiceProvider
  ) {
    this.selectedReason = "";
  }

  ngOnInit() {

    this.guestInfo = this.storage.currentGuest;

    if(!this.guestInfo.GuestName){
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
