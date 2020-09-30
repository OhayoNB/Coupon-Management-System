import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCouponComponent } from './update-coupon.component';

describe('UpdateCouponComponent', () => {
  let component: UpdateCouponComponent;
  let fixture: ComponentFixture<UpdateCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
