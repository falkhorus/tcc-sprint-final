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
      imagem: 'https://cdn.discordapp.com/attachments/1432328327707758635/1442592389075046400/ABS2GSkP4BKwrHJDXJFtxY8FeJIXkMv9xZoHw5s4hRbryM1OnFrb0gPOy1nBKq7jllIMKapUusp4V--kynyY581yMuvkwuNBXdh0rm8ldlDIUERv9HKj26-BsajOTuQO6_DSd1n0GgvN4O282uhqfng1MdXWRbaP5jb1kkqqltldTo8VmYhBgws1024-rj.png?ex=6925fe5b&is=6924acdb&hm=a478412b5974d52def349177cb70ee8d52ea4dd50f3531a602e98a275207b6b3&',
      data: '12 Dez 2025',
      titulo: 'GameJam Global 2025',
      descricao: 'Forme sua equipe no Indie Hub e participe da maior GameJam do ano.'
    },
    {
      imagem: 'https://cdn.discordapp.com/attachments/1432328327707758635/1442587506628362350/ABS2GSn9G7RO_1kI3jdjVpi7R0hQnfvWdnlizA71HwD4fOjE1A7xJbSe7Kl8_e8DcMyBE_t3ax6VKyD0M5fK4ZiefWxtdwzhULALUaF20J2zlWIUlzk-vT5UttBmFaZ_POK7SZzmjYwE1Nb5QxF9M8FvIf9msP63VbzEcrd1Vb7EpgVoUEBcEQs1024-rj.png?ex=6925f9cf&is=6924a84f&hm=a8ddeec18927da83d04ae3ce1b651ebc1a637aa2c5616a0365e64c9c3160846e&', 
      data: '15 Dez 2025',
      titulo: 'Novas Ferramentas de IA',
      descricao: 'Descubra como a inteligência artificial pode acelerar seus assets.'
    },
    {
      imagem: 'https://cdn.discordapp.com/attachments/1432328327707758635/1442591538218668052/ABS2GSnfUzp7O9qgwv0kHZ4yRqjOqXhWMib1zKog2LcLLTW8-RF5j8FuW-CiXVX1aXwd2GAKF6ZkPyIHAtEE7t3ahi9i5HYKQkAKGtkf-3hA_fbl0aV4tlNXSGYrPGeKkV-bmaKI2oSXS_4LRFCJVEQxL7vpB0bM4FfEBorVQ-IPO59JY30Fs1024-rj.png?ex=6925fd90&is=6924ac10&hm=efd18d57e5257c390bf3ae5f1821531bd4d5b9496bb78223be6d44c267b87d34&', 
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