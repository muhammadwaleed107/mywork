import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayplanCommentsComponent } from './dayplan-comments.component';

describe('DayplanCommentsComponent', () => {
  let component: DayplanCommentsComponent;
  let fixture: ComponentFixture<DayplanCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayplanCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayplanCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
