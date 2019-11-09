import { FilterPopoverComponent } from '../filter-popover/filter-popover.component';

import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  isSearchActive = false;
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: FilterPopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  searchActive() {
    
    if(this.isSearchActive == true){
      this.isSearchActive = false;
    }
    else{
      this.isSearchActive = true;
    }
  }
}
