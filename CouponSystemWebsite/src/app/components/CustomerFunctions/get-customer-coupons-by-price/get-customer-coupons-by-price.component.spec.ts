import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerCouponsByPriceComponent } from './get-customer-coupons-by-price.component';

describe('GetCustomerCouponsByPriceComponent', () => {
  let component: GetCustomerCouponsByPriceComponent;
  let fixture: ComponentFixture<GetCustomerCouponsByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCustomerCouponsByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerCouponsByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
