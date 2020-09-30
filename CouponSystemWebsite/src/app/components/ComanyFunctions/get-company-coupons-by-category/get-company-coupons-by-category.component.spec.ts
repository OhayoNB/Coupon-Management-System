import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCompanyCouponsByCategoryComponent } from './get-company-coupons-by-category.component';

describe('GetCompanyCouponsByCategoryComponent', () => {
  let component: GetCompanyCouponsByCategoryComponent;
  let fixture: ComponentFixture<GetCompanyCouponsByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCompanyCouponsByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCompanyCouponsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
