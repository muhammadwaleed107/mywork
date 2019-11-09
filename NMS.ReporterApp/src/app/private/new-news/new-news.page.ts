import { SharedClass } from './../../shared/shared.class';
import { HttpServiceProvider } from './../../shared/providers/http.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MyPointsComponent } from './../../components/my-points/my-points.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BeatsComponent } from '../../components/beats/beats.component';
import { DomSanitizer } from '@angular/platform-browser';
import { SlugSearchComponent } from '../../components/slug-search/slug-search.component';
import { LocalServiceProvider } from '../../shared/providers/local.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-news',
  templateUrl: './new-news.page.html',
  styleUrls: ['./new-news.page.scss'],
})
export class NewNewsPage implements OnInit {
  public seletedCameraMan;
  public seletedCameraManId;
  public selectedBeatId;
  public selectedSlugId;
  sid;
  public isImportant: Number = 0;
  public cameraManList: [{
    CameranFirstName: string,
    CameranName: string,
    UserId: Number,
  }];
  newData: any = [];
  public selectedType = "TK";
  public selectedSlug = "CR";
  public selectedSlugValue = "Enter Slug";
  public NewsArray: any = [];
  public showImg;
  public tickerText = "";
  @ViewChild('messageContainer') container: ElementRef;
  @ViewChild('myInput') myInput: ElementRef;
  newSubmit: FormGroup;
  constructor(
    public modalCtrl: ModalController,
    private sanitizer: DomSanitizer,
    private localService: LocalServiceProvider,
    private frbl: FormBuilder,
    public httpService: HttpServiceProvider,
    public sharedClass: SharedClass,
    private route: ActivatedRoute
  ) {
    this.cameraManList = this.localService.getCameraManList;
    this.sid = this.route.snapshot.paramMap.get('sid');
    if(this.sid){
      this.getNewbySlugId(this.sid);
    }
  }
  createFrom() {
    this.newSubmit = this.frbl.group({
      SlugId: [0],
      SlugTitle: [''],
      IsImportant: [0],
      BeatId: [0],
      UserId: this.localService.getUserid,
      CameramanId: [0],
      TemplateId: [1],
      ScreenId: [1],
      Body: ['']
    });
  }
  ngOnInit() {
    this.createFrom();
  }
  async addNews() {
    // this.NewsArray.push({
    //   text: this.tickerText,
    //   type: this.selectedType
    // });
    const loader = await this.sharedClass.presentLoading('Loading...');
    loader.present();
    this.newSubmit.controls['SlugId'].setValue(this.selectedSlugId);
    this.newSubmit.controls['SlugTitle'].setValue(this.selectedSlugValue);
    this.newSubmit.controls['IsImportant'].setValue(this.isImportant);
    this.newSubmit.controls['BeatId'].setValue(this.selectedBeatId);
    this.newSubmit.controls['CameramanId'].setValue(+this.seletedCameraManId);
    this.newSubmit.controls['Body'].setValue(this.tickerText);
    console.log('finalValue=>', this.newSubmit.value);
    this.httpService.addNews(this.newSubmit.value)
      .subscribe((data: any) => {
        if (data) {
          if (data.IsSuccess) {
            this.newData.push(data.News[0]);
            this.sharedClass.presentToast('New Added Successfully');
            this.dataReset();
          }

        }
        loader.dismiss();
      }, err => {
        loader.dismiss();
      });
    // this.scrollToBottom();
  }
  dataReset() {
    this.tickerText = "";

  }
  beat() {
    // this.presentFirstModal();
  }
  // async presentFirstModal() {
  //   let beat = this.localService.getUserBeats;
  //   const modal = await this.modalCtrl.create({
  //     component: BeatsComponent, componentProps: {
  //       types: beat,
  //     }
  //   });
  //   modal.present();
  //   const { data } = await modal.onDidDismiss();
  //   debugger;
  //   if (data) {

  //     this.selectedType = data.type;
  //   }
  // }
  async SelectSlug() {
    let beat = this.localService.getUserBeats;
    const modal = await this.modalCtrl.create({
      component: BeatsComponent, componentProps: {
        types: beat,
      }
    });
    modal.present();
    const { data } = await modal.onDidDismiss();

    if (data) {
      this.selectedSlug = data.type.BeatName;
      this.selectedBeatId = data.type.BeatId;
    }
  }
  handleFileInput(files: FileList) {
    if (files.length) {
      let bvlaue = window.URL.createObjectURL(files[0]);
      this.showImg = bvlaue;
    }
  }
  async selectSlug() {
    const modal = await this.modalCtrl.create({
      component: SlugSearchComponent, componentProps: {
        BeatId: this.selectedBeatId,
      }
    });
    modal.present();
    let { data } = await modal.onDidDismiss();

    if (data) {
      this.selectedSlugValue = data.SlugTitle;
      this.selectedSlugId = data.SlugId;
      this.getNewbySlugId(this.selectedSlugId);
    }
  }
  
  resize() {
    if (this.tickerText == "") {
      this.myInput.nativeElement.style.height = "40px";
    }
    else {
      this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    }

  }
  
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  myPoints() {
    this.PointModal();
  }

  async PointModal() {
    const modal = await this.modalCtrl.create({ component: MyPointsComponent });
    return await modal.present();
  }

  scrollToBottom() {
    setTimeout(() => {
      try {
        console.log('scrollToBottom called');
        this.container.nativeElement.top = this.container.nativeElement.scrollHeight;
      } catch (err) { }
    }, 300);

  }

  getNewbySlugId(id) {
    this.httpService.getNewsBySlugId(id, 0)
      .subscribe((data: any) => {
        this.newData = data.News;
        this.newData = this.newData.reverse();
      })
  }

  markImportant() {
    if (this.isImportant == 1) {
      this.isImportant = 0;
    }
    else {
      this.isImportant = 1;
    }
  }
}
