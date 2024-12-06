import { Component } from '@angular/core';
import { DatosComponent } from '../components/datos/datos.component';
import { GerenteComponent } from '../components/gerente/gerente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Button, ButtonModule } from 'primeng/button';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from '../components/persona/persona.component';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [DatosComponent,GerenteComponent,PersonaComponent,ReactiveFormsModule,ButtonModule,CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  otherForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.otherForm = this.fb.group(
      {
        firstName: ['',Validators.required],
        lastName: ['',Validators.required],
        textEdit : ['',Validators.required],
        beginDate : ['',Validators.required],
        endDate : ['',Validators.required],
        directName: ['',Validators.required],
        directEmail: ['',[Validators.required, Validators.email]],
        email: ['',[Validators.required,Validators.email]],
        phone: ['',[Validators.required,Validators.pattern('^[0-9]*$')]]
      }
    )
  };
  onSubmit(){
    if (this.otherForm.valid){
      console.log(this.otherForm.value);
    }else{
      console.log('Formulario no valido');
    }
  }
}

