import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalPortalPage } from './digital-portal.page';

describe('DigitalPortalPage', () => {
  let component: DigitalPortalPage;
  let fixture: ComponentFixture<DigitalPortalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalPortalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalPortalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
