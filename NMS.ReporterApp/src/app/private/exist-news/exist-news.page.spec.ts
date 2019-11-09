import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistNewsPage } from './exist-news.page';

describe('ExistNewsPage', () => {
  let component: ExistNewsPage;
  let fixture: ComponentFixture<ExistNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
