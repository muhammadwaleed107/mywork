import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueDetailPage } from './league-detail.page';

describe('LeagueDetailPage', () => {
  let component: LeagueDetailPage;
  let fixture: ComponentFixture<LeagueDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
