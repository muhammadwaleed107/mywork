import { Component, OnInit, Input } from '@angular/core';
import { AssignmentDTO } from 'src/app/shared/models';

@Component({
  selector: 'app-assignment-card2',
  templateUrl: './assignment-card2.component.html',
  styleUrls: ['./assignment-card2.component.scss']
})
export class AssignmentCard2Component implements OnInit {
@Input() item: AssignmentDTO;
  constructor() { }

  ngOnInit() {
    console.log("data=>",this.item);
  }

}
