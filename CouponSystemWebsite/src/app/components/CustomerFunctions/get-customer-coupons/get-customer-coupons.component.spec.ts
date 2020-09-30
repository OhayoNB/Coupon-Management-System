import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCustomerCouponsComponent } from './get-customer-coupons.component';

describe('GetCustomerCouponsComponent', () => {
  let component: GetCustomerCouponsComponent;
  let fixture: ComponentFixture<GetCustomerCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCustomerCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCustomerCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
