import { StorageServiceProvider } from './stroage.service';
import { Injectable } from '@angular/core';
import { StorageKey } from 'src/app/shared/enums/storagekey';
import * as moment from 'moment';
import { SlugDetail } from '../models';
@Injectable({
  providedIn: 'root'
})
export class LocalServiceProvider {
  constructor(
    public storageService: StorageServiceProvider
  ) { }
  get getUserid(){
    let id = this.storageService.getProperty(StorageKey.User) || [];
   return  id.id
  }
  get getUserMeta(){
    return  this.storageService.getProperty(StorageKey.UserMeta) || [];
   }
   get getUserBeats(){
     let beat = this.getUserMeta;
     return beat.Beats;
   }
  set setUserMeta(data:any){
      this.storageService.setProperty(StorageKey.UserMeta, data);
  }
  get getCameraManList(){
    let userMeta = this.getUserMeta;
    try {
      return userMeta.CameraMan;
    } catch (error) {
      return [];
    }
  }
  
  getTimeFromNow(dateStr){
    return moment(dateStr).fromNow();
  }
  set setSelectedAssigment(item)
  {
    this.storageService.setProperty('SelectedAssigment',item)
  }
  get getSelectedAssigment(){
    return this.storageService.getProperty('SelectedAssigment');
  }
}
