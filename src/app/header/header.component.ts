import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router'; // Adicione Router
import { CommonModule } from '@angular/common'; // Importante para o *ngIf

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router) {}

  menuAberto = false;
  usuarioLogado: any = null; // Guarda os dados se estiver logado

  ngOnInit() {
    // Verifica se existe sessão salva ao carregar o header
    this.verificarLogin();
  }

  verificarLogin() {
    const sessao = localStorage.getItem('indiehub_sessao');
    if (sessao) {
      this.usuarioLogado = JSON.parse(sessao);
    } else {
      this.usuarioLogado = null;
    }
  }

  alternarMenu() {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu() {
    this.menuAberto = false;
  }

  logout() {
    // 1. Remove a sessão
    localStorage.removeItem('indiehub_sessao');
    
    // 2. Limpa a variável local
    this.usuarioLogado = null;
    
    // 3. Fecha o menu mobile se estiver aberto
    this.fecharMenu();

    // 4. Redireciona para o login
    this.router.navigate(['/login']);
  }
}