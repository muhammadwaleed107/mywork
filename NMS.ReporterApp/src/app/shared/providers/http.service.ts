import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_HOST } from 'src/app/api.module';
import { SlugNewsPayload } from '../models';
import { LocalServiceProvider } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceProvider {
  // databaseURL = "http://10.1.18.211:8080"
  constructor(
    public http: HttpClient,
    @Inject(API_HOST) private _APIHOST: any,
    private localService: LocalServiceProvider
  ) {


  }

  getAssignmentByUserId() {
    let userid = this.localService.getUserid;
    return this.http.post(`${this._APIHOST}api/user/getAssignmentByUserId`, {
      UserId: userid,
      
    });
  }
  getLocationName(lat, long) {
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=true&key=AIzaSyB0ezfD_Da-R71oZxjko2YRIvTsV4UcIZI`)
  }

  getUseMetaInfo(resObject) {
    return this.http.post(`${this._APIHOST}api/user/getUseMetaInfo`, resObject);
  }

  userLogin(username, password) {
    return this.http.post(`${this._APIHOST}api/user/login`, { userName: username, password: password });
  }

  getSlugByUser(userId, beatId) {

    return this.http.post(`${this._APIHOST}api/user/getSlugByUser`, {
      UserId: userId,
      BeatId: beatId,
    });
  }
  addNews(newObjet){
    return this.http.post(`${this._APIHOST}api/user/addNews`, newObjet);
  }

  getNewsBySlugId(slugId, newsOffset) {
    return this.http.post(`${this._APIHOST}api/user/getNewsBySlugId`, {
      SlugId: slugId,
      NewsOffset: newsOffset
    });
  }

  getSlugNews(data: SlugNewsPayload) {
    return this.http.post(`${this._APIHOST}api/user/getSlugNews`, data);
  }

  // addNews(reqObject) {
  //   return this.http.post(`${this._APIHOST}api/user/addNews`, {
  //     reqObject
  //   });
  // }

  getArchivalMedia(searchKeyword, resourceType, resourceOffset, fromDate, toDate) {
    return this.http.post(`${this._APIHOST}api/user/getArchivalMedia`, {
      SearchKeyword: searchKeyword,
      ResourceType: resourceType,
      ResourceOffset: resourceOffset,
      FromDate: fromDate,
      ToDate: toDate,
    });
  }


  getGuestAssignmentByUserId(UserId) {
    return this.http.post(`${this._APIHOST}api/user/getGuestAssignmentByUserId`, {
      UserId: UserId
    });

  }

  GetUserPointsDetailRequest() {
    let userid = this.localService.getUserid;
    return this.http.post(`${this._APIHOST}api/user/getUserPointsDetail`, {
      UserId: userid.id
    });
  }
  getUserNotification(){
    let userid = this.localService.getUserid;
    return this.http.post(`${this._APIHOST}api/user/getUserNotification`, {
      UserId: userid.id
    });
  }
}
