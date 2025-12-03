import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-termos',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './termos.component.html',
  styleUrl: './termos.component.css'
})
export class TermosComponent {}
