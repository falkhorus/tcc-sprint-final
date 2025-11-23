import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importante para funcionar as imagens
import { OnInit, OnDestroy } from '@angular/core'; // 1. Importamos OnInit e OnDestroy para o carrossel (Angular)


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule], // Adicionei CommonModule aqui por garantia
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class  HomeComponent implements OnInit, OnDestroy {

  // Variável que controla qual slide está aparecendo (Começa no 0)
  indiceAtual = 0;
  intervalo: any; // Variável para guardar o nosso temporizador

  // 2. CARROSSEL (Array de objetos)
  novidades = [
    {
      imagem: 'https://picsum.photos/id/180/800/400',
      data: '12 Nov 2024',
      titulo: 'GameJam Global 2024',
      descricao: 'Forme sua equipe no Indie Hub e participe da maior GameJam do ano.'
    },
    {
      imagem: 'https://picsum.photos/id/133/800/400', 
      data: '15 Nov 2024',
      titulo: 'Novas Ferramentas de IA',
      descricao: 'Descubra como a inteligência artificial pode acelerar seus assets.'
    },
    {
      imagem: 'https://picsum.photos/id/532/800/400', 
      data: '20 Nov 2024',
      titulo: 'Showcase de Dezembro',
      descricao: 'Inscreva seu projeto para aparecer na página principal.'
    }
  ];

  // --- MÁGICA DO AUTOPLAY ---

  // Quando a página nasce
  ngOnInit() {
    this.iniciarTimer();
  }

  // Quando a página morre (usuário muda de rota)
  ngOnDestroy() {
    this.pararTimer();
  }

  iniciarTimer() {
    // Roda a função proximoSlide() a cada 3000 milissegundos (3 segundos)
    this.intervalo = setInterval(() => {
      this.proximoSlide();
    }, 3000);
  }

  pararTimer() {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  // --- SUAS FUNÇÕES ORIGINAIS ---

  // 3. Função para voltar (Seta Esquerda)
  voltarSlide() {
    if (this.indiceAtual > 0) {
      this.indiceAtual--; // Diminui 1
    } else {
      this.indiceAtual = this.novidades.length - 1; // Se tá no começo, vai pro final (Loop)
    }
  }

  // 4. Função para avançar (Seta Direita)
  proximoSlide() {
    if (this.indiceAtual < this.novidades.length - 1) {
      this.indiceAtual++; // Aumenta 1
    } else {
      this.indiceAtual = 0; // Se tá no final, volta pro começo (Loop)
    }
  }
}

  
