import { Component, OnInit } from '@angular/core';
import { ViewController } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { HttpServiceProvider } from 'src/app/shared/providers/http.service';
import { MyPointsDTO } from 'src/app/shared/models';

@Component({
  selector: 'app-my-points',
  templateUrl: './my-points.component.html',
  styleUrls: ['./my-points.component.scss']
})
export class MyPointsComponent implements OnInit {
  MyPointData: MyPointsDTO[];
  highlight: boolean;
  constructor(
    public mdlCtrl: ModalController,
    private httpService: HttpServiceProvider
  ) {
    this.highlight = false;
    this.getPoints();
    
  }

  getPoints() {
    this.httpService.GetUserPointsDetailRequest()
    .subscribe((data: any) => {
      if (data) {
        this.MyPointData = data.UserPointDetail;
        if (data.UserPointDetail.PointsType == 'N') {
          this.highlight = true;
        }
      }
    });
  }
  ngOnInit() {
  }

  closeModal() {
    this.mdlCtrl.dismiss();
  }
}
