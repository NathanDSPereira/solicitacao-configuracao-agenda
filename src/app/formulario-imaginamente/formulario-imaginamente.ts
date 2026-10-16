import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-imaginamente',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './formulario-imaginamente.html',
  styleUrl: './formulario-imaginamente.css',
})
export class FormularioImaginamente {
}
