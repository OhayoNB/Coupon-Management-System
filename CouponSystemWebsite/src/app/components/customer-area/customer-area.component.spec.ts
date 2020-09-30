import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAreaComponent } from './customer-area.component';

describe('CustomerAreaComponent', () => {
  let component: CustomerAreaComponent;
  let fixture: ComponentFixture<CustomerAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
