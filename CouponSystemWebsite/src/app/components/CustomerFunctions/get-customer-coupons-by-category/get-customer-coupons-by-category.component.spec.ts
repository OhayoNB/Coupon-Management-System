import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerCouponsByCategoryComponent } from './get-customer-coupons-by-category.component';

describe('GetCustomerCouponsByCategoryComponent', () => {
  let component: GetCustomerCouponsByCategoryComponent;
  let fixture: ComponentFixture<GetCustomerCouponsByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCustomerCouponsByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerCouponsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
