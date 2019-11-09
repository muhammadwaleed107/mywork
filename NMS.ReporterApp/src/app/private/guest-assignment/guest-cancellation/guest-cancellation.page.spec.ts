import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestCancellationPage } from './guest-cancellation.page';

describe('GuestCancellationPage', () => {
  let component: GuestCancellationPage;
  let fixture: ComponentFixture<GuestCancellationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestCancellationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestCancellationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
