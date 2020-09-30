import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCouponComponent } from './purchase-coupon.component';

describe('PurchaseCouponComponent', () => {
  let component: PurchaseCouponComponent;
  let fixture: ComponentFixture<PurchaseCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
