import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCompanyCouponsByPriceComponent } from './get-company-coupons-by-price.component';

describe('GetCompanyCouponsByPriceComponent', () => {
  let component: GetCompanyCouponsByPriceComponent;
  let fixture: ComponentFixture<GetCompanyCouponsByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCompanyCouponsByPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCompanyCouponsByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
