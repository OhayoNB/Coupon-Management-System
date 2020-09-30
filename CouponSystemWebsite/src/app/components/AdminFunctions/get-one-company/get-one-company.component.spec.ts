import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneCompanyComponent } from './get-one-company.component';

describe('GetOneCompanyComponent', () => {
  let component: GetOneCompanyComponent;
  let fixture: ComponentFixture<GetOneCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetOneCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetOneCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
