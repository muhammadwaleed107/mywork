import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlugSearchComponent } from './slug-search.component';

describe('SlugSearchComponent', () => {
  let component: SlugSearchComponent;
  let fixture: ComponentFixture<SlugSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlugSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlugSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
