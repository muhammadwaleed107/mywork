import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-assignment-comment-box',
  templateUrl: './assignment-comment-box.component.html',
  styleUrls: ['./assignment-comment-box.component.scss']
})
export class AssignmentCommentBoxComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit() {
  }

}
