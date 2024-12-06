import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gerente',
  standalone: true,
  imports: [InputGroupModule,ReactiveFormsModule,FormsModule,InputGroupAddonModule,InputTextModule,CommonModule],
  templateUrl: './gerente.component.html',
  styleUrl: './gerente.component.css'
})
export class GerenteComponent {
  @Input() otherForm!: FormGroup;
}
