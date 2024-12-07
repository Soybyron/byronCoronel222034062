import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SolicitudDeVacacionesService } from '../../services/solicitud-de-vacaciones.service';

@Component({
  selector: 'app-validacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule],
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.css'
})
export class ValidacionComponent {
  validationForm : FormGroup

  constructor(private fb : FormBuilder, private service : SolicitudDeVacacionesService){
    this.validationForm = this.fb.group(
      {
        email : ['', [Validators.required, Validators.email]],
        lastName : ['', Validators.required]
      }
    )
  }
   
  //Métodos
   onSubmit(){
    if (this.validationForm.valid){
      const {email, lastName} = this.validationForm.value
      this.service.validation(email, lastName).subscribe(response => {console.log('Exitoso', response)})
      console.log(this.validationForm.value)
    }
    else{
      console.log('Fomulario invalido')
    }
  } 
}
