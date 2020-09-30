import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCompanyDetailsComponent } from './get-company-details.component';

describe('GetCompanyDetailsComponent', () => {
  let component: GetCompanyDetailsComponent;
  let fixture: ComponentFixture<GetCompanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCompanyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
