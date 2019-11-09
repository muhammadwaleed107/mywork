import { Component, OnInit, Input } from '@angular/core';
import { AssignmentDTO } from 'src/app/shared/models';

@Component({
  selector: 'app-assignment-news-box',
  templateUrl: './assignment-news-box.component.html',
  styleUrls: ['./assignment-news-box.component.scss']
})
export class AssignmentNewsBoxComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit() {
  }

}
