import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPlanCardComponent } from './day-plan-card.component';

describe('DayPlanCardComponent', () => {
  let component: DayPlanCardComponent;
  let fixture: ComponentFixture<DayPlanCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayPlanCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayPlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
