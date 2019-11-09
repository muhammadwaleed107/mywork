import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { LocalServiceProvider } from 'src/app/shared/providers/local.service';
import { AssignmentDTO } from 'src/app/shared/models';


@Component({
  selector: 'app-single-assignment',
  templateUrl: './single-assignment.page.html',
  styleUrls: ['./single-assignment.page.scss'],
})
export class SingleAssignmentPage implements OnInit {

  hideNews = false;
  tickerText = "";
  tickerdata = AssignmentDTO;
  @ViewChild('myInput') myInput: ElementRef;
  constructor(
    private localService: LocalServiceProvider
  ) {

  }

  ngOnInit() {
    this.hideNews = false;
    console.log('news ' + this.hideNews);
    this.tickerdata = this.localService.getSelectedAssigment;
    
  }
  
  showNewsDetail() {
    this.hideNews = false;
    console.log('news ' + this.hideNews);
  }
  showComments() {
    this.hideNews = true;
    console.log('news ' + this.hideNews);
  }
  resize() {
    if (this.tickerText == "") {
      this.myInput.nativeElement.style.height = "40px";
    }
    else {
      this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px';
    }

  }
}
