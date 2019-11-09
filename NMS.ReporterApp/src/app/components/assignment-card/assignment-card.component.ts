import { Component, OnInit, Input } from '@angular/core';
import { AssignmentDTO } from 'src/app/shared/models';

@Component({
  selector: 'app-assignment-card',
  templateUrl: './assignment-card.component.html',
  styleUrls: ['./assignment-card.component.scss']
})
export class AssignmentCardComponent implements OnInit {
@Input() citem: AssignmentDTO;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("iamcomponent=>",this.citem);
  }

}
