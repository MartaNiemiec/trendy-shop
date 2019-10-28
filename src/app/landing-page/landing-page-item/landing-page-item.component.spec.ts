import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageItemComponent } from './landing-page-item.component';

describe('LandingPageItemComponent', () => {
  let component: LandingPageItemComponent;
  let fixture: ComponentFixture<LandingPageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
