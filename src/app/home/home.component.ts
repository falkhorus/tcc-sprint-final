import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  // Variável que controla qual slide está aparecendo (Começa no 0)
  indiceAtual = 0;
  intervalo: any; 

  // 2. CARROSSEL (Array de objetos)
  novidades = [
    {
      imagem: '/carrossel_3.png',
      data: '12 Dez 2025',
      titulo: 'GameJam Global 2025',
      descricao: 'Forme sua equipe no Indie Hub e participe da maior GameJam do ano.'
    },
    {
      imagem: '/carrossel_1.png', 
      data: '15 Dez 2025',
      titulo: 'Novas Ferramentas de IA',
      descricao: 'Descubra como a inteligência artificial pode acelerar seus assets.'
    },
    {
      imagem: '/carrossel_2.png', 
      data: '20 Dez 2025',
      titulo: 'Showcase de Dezembro',
      descricao: 'Inscreva seu projeto para aparecer na página principal.'
    }
  ];

  // --- MÁGICA DO AUTOPLAY ---

  ngOnInit() {
    this.iniciarTimer();
  }

  ngOnDestroy() {
    this.pararTimer();
  }

  iniciarTimer() {
    this.intervalo = setInterval(() => {
      this.proximoSlide();
    }, 5000);
  }

  pararTimer() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  // --- FUNÇÕES DE NAVEGAÇÃO ---

  voltarSlide() {
    this.pararTimer(); 
    if (this.indiceAtual > 0) {
      this.indiceAtual--; 
    } else {
      this.indiceAtual = this.novidades.length - 1; 
    }
    this.iniciarTimer();
  }

  proximoSlide() {
    this.pararTimer();
    if (this.indiceAtual < this.novidades.length - 1) {
      this.indiceAtual++; 
    } else {
      this.indiceAtual = 0; 
    }
    this.iniciarTimer(); 
  }

  // NOVA FUNÇÃO: Clicar na bolinha
  irParaSlide(index: number) {
    this.pararTimer();
    this.indiceAtual = index;
    this.iniciarTimer();
  }
}