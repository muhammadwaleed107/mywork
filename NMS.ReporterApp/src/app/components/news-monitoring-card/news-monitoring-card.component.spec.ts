import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMonitoringCardComponent } from './news-monitoring-card.component';

describe('NewsMonitoringCardComponent', () => {
  let component: NewsMonitoringCardComponent;
  let fixture: ComponentFixture<NewsMonitoringCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsMonitoringCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMonitoringCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
