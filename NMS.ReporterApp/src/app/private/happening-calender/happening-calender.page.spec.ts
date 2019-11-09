import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappeningCalenderPage } from './happening-calender.page';

describe('HappeningCalenderPage', () => {
  let component: HappeningCalenderPage;
  let fixture: ComponentFixture<HappeningCalenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappeningCalenderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappeningCalenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
