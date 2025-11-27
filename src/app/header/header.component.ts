import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Importamos o RouterLinkActive

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // Adicionamos ele na lista
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  // Variável de controle (começa fechado)
  menuAberto = false;

  // Função que troca o estado (se tá fechado abre, se tá aberto fecha)
  alternarMenu() {
    this.menuAberto = !this.menuAberto;
  }

  // Função para fechar o menu quando clicar em um link (opcional, mas bom para UX)
  fecharMenu() {
    this.menuAberto = false;
  }
}
