import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentPortalComponent } from './assignment-portal.component';

describe('AssignmentPortalComponent', () => {
  let component: AssignmentPortalComponent;
  let fixture: ComponentFixture<AssignmentPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
