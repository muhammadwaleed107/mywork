import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMonitoringPage } from './news-monitoring.page';

describe('NewsMonitoringPage', () => {
  let component: NewsMonitoringPage;
  let fixture: ComponentFixture<NewsMonitoringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsMonitoringPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMonitoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
