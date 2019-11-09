import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-league-stats',
  templateUrl: './league-stats.page.html',
  styleUrls: ['./league-stats.page.scss'],
})
export class LeagueStatsPage implements OnInit {
  dataTypes = 0;
  dateTime = moment().format("YYYY-MM-DD").toString();
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  openModal() {
    this.navCtrl.navigateForward('/private/league-detail');

  }
  datatypeActive(type) {
    this.dataTypes = type;
  }
}
