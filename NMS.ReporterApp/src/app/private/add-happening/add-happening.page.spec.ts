import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHappeningPage } from './add-happening.page';

describe('AddHappeningPage', () => {
  let component: AddHappeningPage;
  let fixture: ComponentFixture<AddHappeningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHappeningPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHappeningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
