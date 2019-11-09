import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentCommentBoxComponent } from './assignment-comment-box.component';

describe('AssignmentCommentBoxComponent', () => {
  let component: AssignmentCommentBoxComponent;
  let fixture: ComponentFixture<AssignmentCommentBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentCommentBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentCommentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
