import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootagePortalComponent } from './footage-portal.component';

describe('FootagePortalComponent', () => {
  let component: FootagePortalComponent;
  let fixture: ComponentFixture<FootagePortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootagePortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootagePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
