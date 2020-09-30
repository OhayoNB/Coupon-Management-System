import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllCustomersComponent } from './get-all-customers.component';

describe('GetAllCustomersComponent', () => {
  let component: GetAllCustomersComponent;
  let fixture: ComponentFixture<GetAllCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
