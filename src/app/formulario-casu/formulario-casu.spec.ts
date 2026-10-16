import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCasu } from './formulario-casu';

describe('FormularioCasu', () => {
  let component: FormularioCasu;
  let fixture: ComponentFixture<FormularioCasu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCasu],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioCasu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
