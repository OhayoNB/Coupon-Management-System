import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAreaComponent } from './company-area.component';

describe('CompanyAreaComponent', () => {
  let component: CompanyAreaComponent;
  let fixture: ComponentFixture<CompanyAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
