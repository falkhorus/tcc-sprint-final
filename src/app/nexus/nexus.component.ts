import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component'; // Importa o arquivo
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nexus',
  standalone: true,
  imports: [HeaderComponent, CommonModule], // Autoriza o uso
  templateUrl: './nexus.component.html',
  styleUrl: './nexus.component.css'
})



export class NexusComponent {
  

  



  alterarOpcao(opcao: string) {
    this.opcaoSelecionada = opcao;
  }

  talentos =[ {


    nome: 'Ana Silva',
    cargo: 'Game Designer',
    xp: '3 anos de experiência',
    foto: 'https://cdn.discordapp.com/attachments/1432328327707758635/1443341619347718338/eSTYsqFbNtdwlbkdCcvpa6sZ3WtXsPaKaF2Wyv5qeUGymROCLCddeKdNOzZRcmAAA.png?ex=6928b822&is=692766a2&hm=224fc86a8266c59afb1802044a4f7e5f91ec80de3854f8e274c66dbd8c82faee&',
    corCargo: '#9333EA',
    local: 'Salvador, BA',
    valorHora: 'R$ 80/h'
    
  },


  {
      nome: 'Carlos Santos',
      cargo: 'Programador',
      xp: '5 anos de experiência',
      local: 'Rio de Janeiro, RJ',
      foto: 'https://cdn.discordapp.com/attachments/1432328327707758635/1443341740445536356/OIP.png?ex=6928b83e&is=692766be&hm=e20198084532641853178df6ae36470000d6754278280ed19812bb2cc028f844&',
      corCargo: '#2563eb', 
      valorHora: 'R$ 100/h'
    },
    {
      nome: 'Maria Oliveira',
      cargo: 'Artist 2D',
      xp: '4 anos de experiência',
      local: 'Belo Horizonte, MG',
      foto: 'https://cdn.discordapp.com/attachments/1432328327707758635/1443341661542285332/hHNiAsANbmetbxkMNLTohkcZzvYNFnnWcLGm8MPzwh6cCC3BidVJGXEcqRVU2ci7oXrdhHF4Xx25TjE34LrTPzk5EcKIvYifsWJMpcNNpyMWbLM5kymWF5AAA.png?ex=6928b82c&is=692766ac&hm=91636b5d3c81e97d97477cb9494484452240cef94848ee65ccf89d1e90614ced&',
      corCargo: '#db2777',
      valorHora: 'R$ 70/h'
    },
    {
      nome: 'João Costa',
      cargo: 'Sound Designer',
      xp: '6 anos de experiência',
      local: 'Porto Alegre, RS',
      foto: 'https://cdn.discordapp.com/attachments/1432328327707758635/1443342055186235503/OIP.png?ex=6928b889&is=69276709&hm=c4f858477c688bf76949c48947f5c89f48dc5d14b55763d8d64a42433acdb1d8&',
      corCargo: '#ea580c', 
      valorHora: 'R$ 90/h'
    },
    {
      nome: 'Fernanda Lima',
      cargo: 'Artist 3D',
      xp: '2 anos de experiência',
      local: 'Recife, PE',
      foto: 'https://cdn.discordapp.com/attachments/1432328327707758635/1443341903792701614/OIP.png?ex=6928b865&is=692766e5&hm=21bc30ebc202369ada54310bc8800b0893f9aa2614a15cfc6b90644587b5e890&',
      corCargo: '#7c3aed', 
      valorHora: 'R$ 75/h'
    },
    {
      nome: 'Pedro Rocha',
      cargo: 'Animator',
      xp: '4 anos de experiência',
      local: 'Curitiba, PR',
      foto: 'https://cdn.discordapp.com/attachments/1432328327707758635/1443342151470682122/OIP.png?ex=6928b8a0&is=69276720&hm=8a06aa67f204724172146130d461f3f007469d0a7da38c36cd3873fa4632d754&',
      corCargo: '#059669',
      valorHora: 'R$ 85/h' 
    }

    


  ]


  vagas = [
    {
      titulo: 'Game Designer Pleno',
      empresa: 'IndieCorp Studios',
      descricao: 'Procuramos um Game Designer experiente para trabalhar em um RPG indie ambicioso.',
      genero: 'RPG',
      salario: 'R$ 4.000 - R$ 6.000',
      requisitos: '3+ anos de experiência, Portfolio sólido',
      tags: ['Full-time', 'Remoto']
    },
    {
      titulo: 'Programador Unity',
      empresa: 'PixelWorks',
      descricao: 'Desenvolvimento de sistemas de gameplay para plataforma 2D.',
      genero: 'Plataforma',
      salario: 'R$ 5.000 - R$ 7.000',
      requisitos: 'C# avançado, Git',
      tags: ['Freelance', 'Remoto']
    },
    {
      titulo: 'Pixel Artist',
      empresa: 'Retro Games',
      descricao: 'Criação de assets e animações para jogo estilo 16-bits.',
      genero: 'Aventura',
      salario: 'A combinar',
      requisitos: 'Aseprite, Noções de animação',
      tags: ['Contrato', 'Híbrido']
    }
  ];


  opcaoSelecionada = 'contratando'
  modalAberto = false;

   //Controle do Modal de VAGA
  modalVagaAberto = false;

  // --- Funções do Perfil ---
  abrirModal() { 
    this.modalAberto = true; }
  fecharModal() {
     this.modalAberto = false; }

  // --- Funções da Vaga ---
  abrirModalVaga() {
    this.modalVagaAberto = true;
  }
   fecharModalVaga() {
    this.modalVagaAberto = false;
  }




// LISTAS PARA O MODAL
  listaHabilidades = [
    'Unity', 'Unreal Engine', 'C#', 'C++', 'JavaScript', 
    'Python', 'Photoshop', 'Blender', 'Maya', 'Aseprite',
    'Git', 'Agile', 'Game Design', 'Level Design', 'UI Design',
    'Sound Design'
  ];

  listaGeneros = [
    'Action', 'Adventure', 'RPG', 'Strategy', 
    'Puzzle', 'Platformer', 'Simulation', 'Sports',
    'Racing', 'Horror', 'Indie'
  ];


 
}
