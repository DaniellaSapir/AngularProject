import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrStep1Component } from './registr-step1.component';

describe('RegistrStep1Component', () => {
  let component: RegistrStep1Component;
  let fixture: ComponentFixture<RegistrStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
