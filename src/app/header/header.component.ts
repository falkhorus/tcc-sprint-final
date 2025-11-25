import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Importamos o RouterLinkActive

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Adicionamos ele na lista
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
