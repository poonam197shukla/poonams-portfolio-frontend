import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOfferComponent } from './services-offer.component';

describe('ServicesOfferComponent', () => {
  let component: ServicesOfferComponent;
  let fixture: ComponentFixture<ServicesOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesOfferComponent]
    });
    fixture = TestBed.createComponent(ServicesOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
