import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNewsMonitoringPage } from './new-news-monitoring.page';

describe('NewNewsMonitoringPage', () => {
  let component: NewNewsMonitoringPage;
  let fixture: ComponentFixture<NewNewsMonitoringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNewsMonitoringPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNewsMonitoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
