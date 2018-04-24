import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGetByIdComponent } from './company-getById.component';

describe('CompanyGetByIdComponent', () => {
  let component: CompanyGetByIdComponent;
  let fixture: ComponentFixture<CompanyGetByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyGetByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGetByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
