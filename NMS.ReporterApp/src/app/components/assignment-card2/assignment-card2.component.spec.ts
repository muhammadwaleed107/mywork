import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentCard2Component } from './assignment-card2.component';

describe('AssignmentCard2Component', () => {
  let component: AssignmentCard2Component;
  let fixture: ComponentFixture<AssignmentCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentCard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
