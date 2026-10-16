import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioImaginamente } from './formulario-imaginamente';

describe('FormularioImaginamente', () => {
  let component: FormularioImaginamente;
  let fixture: ComponentFixture<FormularioImaginamente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioImaginamente],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioImaginamente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
