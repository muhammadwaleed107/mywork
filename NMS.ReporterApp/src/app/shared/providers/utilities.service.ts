import { StorageServiceProvider } from './stroage.service';
import { Injectable } from '@angular/core';
import { StorageKey } from 'src/app/shared/enums/storagekey';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class UtilitiesServiceProvider {

  constructor(
  ) { }


  getTimeFromNow(dateStr){
    return moment(dateStr).fromNow();
  }

  getDateByFormat(dateStr=new Date(),format='DD-MM-YYYY'){
    return moment(dateStr).format(format);
  }
}
