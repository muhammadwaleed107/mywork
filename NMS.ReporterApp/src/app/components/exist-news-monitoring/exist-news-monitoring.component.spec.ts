import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistNewsMonitoringComponent } from './exist-news-monitoring.component';

describe('ExistNewsMonitoringComponent', () => {
  let component: ExistNewsMonitoringComponent;
  let fixture: ComponentFixture<ExistNewsMonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistNewsMonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistNewsMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
