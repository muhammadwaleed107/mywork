import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentNewsBoxComponent } from './assignment-news-box.component';

describe('AssignmentNewsBoxComponent', () => {
  let component: AssignmentNewsBoxComponent;
  let fixture: ComponentFixture<AssignmentNewsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentNewsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentNewsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
