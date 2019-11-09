import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SlugDetail, SlugNews, SlugNewsPayload } from 'src/app/shared/models';
import { UtilitiesServiceProvider } from 'src/app/shared/providers/utilities.service';

@Component({
  selector: 'app-exist-news-monitoring',
  templateUrl: './exist-news-monitoring.component.html',
  styleUrls: ['./exist-news-monitoring.component.scss']
})
export class ExistNewsMonitoringComponent implements OnInit {
  @Input() sluginfo: SlugDetail;
  public status = '';
  public statusLive = '';

  constructor(
    private navCtrl: NavController,
    private util: UtilitiesServiceProvider
  ) { }

  ngOnInit() {
  }

  navTo(sluginfo: SlugDetail) {
    this.navCtrl.navigateRoot(['/home/new-news/', sluginfo.SlugId,sluginfo.SlugTitle]);
  }

  getTimeFromNow(str) {
    return this.util.getTimeFromNow(str);
  }

  getNews(sluginfo: SlugDetail) {
    if (sluginfo && sluginfo.NewsList.length) {
      let news = sluginfo.NewsList;
      if (sluginfo.ViewAll) {
        return news;
      }
      return [news[0], news[1], news[2]];
    }
    return [];

  }

}
