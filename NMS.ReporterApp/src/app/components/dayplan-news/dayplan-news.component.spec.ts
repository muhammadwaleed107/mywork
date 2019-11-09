import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayplanNewsComponent } from './dayplan-news.component';

describe('DayplanNewsComponent', () => {
  let component: DayplanNewsComponent;
  let fixture: ComponentFixture<DayplanNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayplanNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayplanNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
