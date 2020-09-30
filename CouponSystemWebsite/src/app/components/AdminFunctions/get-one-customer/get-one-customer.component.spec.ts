import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneCustomerComponent } from './get-one-customer.component';

describe('GetOneCustomerComponent', () => {
  let component: GetOneCustomerComponent;
  let fixture: ComponentFixture<GetOneCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOneCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
