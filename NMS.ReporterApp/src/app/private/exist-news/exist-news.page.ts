import { MenuController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpServiceProvider } from 'src/app/shared/providers/http.service';
import { StorageServiceProvider } from 'src/app/shared/providers/stroage.service';
import { StorageKey } from 'src/app/shared/enums/storagekey';
import { User, ApiResponse, SlugNewsPayload, SlugDetail } from 'src/app/shared/models';
import { UtilitiesServiceProvider } from 'src/app/shared/providers/utilities.service';

@Component({
  selector: 'app-exist-news',
  templateUrl: './exist-news.page.html',
  styleUrls: ['./exist-news.page.scss'],
})
export class ExistNewsPage implements OnInit {
  // @ViewChild('gmap') gmapElement: any;
  // map: google.maps.Map;
  public slugNews: SlugDetail[] = [];
  public sluginfo: SlugDetail = new SlugDetail();
  constructor(
    public menuCtrl: MenuController,
    public http: HttpServiceProvider,
    public storage: StorageServiceProvider,
    public util: UtilitiesServiceProvider
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(true, '1');
    // var mapProp = {
    //   center: new google.maps.LatLng(18.5793, 73.8143),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };
    // this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    this.getSlugNews();
  }




  getSlugNews() {
    let apiPayload = new SlugNewsPayload();
    this.http.getSlugNews(apiPayload).subscribe((response: ApiResponse) => {
      if (response.IsSuccess) {
        this.slugNews = response.Data || [];
      }
    });
  }





}
