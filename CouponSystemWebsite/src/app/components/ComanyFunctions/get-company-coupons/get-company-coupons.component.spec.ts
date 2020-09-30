import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCompanyCouponsComponent } from './get-company-coupons.component';

describe('GetCompanyCouponsComponent', () => {
  let component: GetCompanyCouponsComponent;
  let fixture: ComponentFixture<GetCompanyCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCompanyCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCompanyCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
