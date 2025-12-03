import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';

// --- INTERFACE PARA O PERFIL ---
// Define o formato dos dados do usuário
export interface UsuarioPerfil {
  nome: string;
  email: string;
  profissao: string;
  fotoUrl: string;
  moedas: number;
  localizacao?: string; // Opcional (?)
  experiencia?: string;
  portfolio?: string;
  biografia?: string;
  habilidades: string[];
  linksSociais: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  // --- ESTADO ---
  modalAberto = false;

  // Dados do Perfil Principal (Exibição)
  meuPerfil: UsuarioPerfil = {
    nome: 'Victor Hugo Falcão',
    email: 'victor@indiehub.com',
    profissao: 'Game Developer',
    // Usando uma imagem de placeholder se não tiver foto
    fotoUrl: 'https://media-gru2-2.cdn.whatsapp.net/v/t61.24694-24/518986842_647978324991181_6865916979306511596_n.jpg?ccb=11-4&oh=01_Q5Aa3AG0QRPEwiPp9FaIhtjpS7HkJr2NXtVZw5C6oK5nXycPWg&oe=693CC7E3&_nc_sid=5e03e0&_nc_cat=109',
    moedas: 0,
    localizacao: 'São Paulo, SP',
    experiencia: '3 anos',
    portfolio: 'https://www.behance.net/victorhugofalcao',
    biografia: 'Apaixonado por criar experiências imersivas e mecânicas de jogo inovadoras. Focado em Unity/C# e Construct 3/JS.',
    habilidades: ['Unity', 'C#', 'Game Design'],
    linksSociais: {
      github: 'https://github.com/falkhorus',
      linkedin: 'https://www.linkedin.com/in/victorhugofalcao/'
    }
  };

  // Objeto Rascunho (usado apenas durante a edição no modal)
  perfilEmEdicao: UsuarioPerfil = { ...this.meuPerfil };

  // --- LISTAS AUXILIARES (Para os selects e botões) ---
  listaProfissoes = [
    'Game Designer', 'Programador', 'Artista 2D', 'Artista 3D',
    'Animador', 'Sound Designer', 'Produtor', 'QA Tester'
  ];

  listaHabilidadesDisponiveis = [
    'Unity', 'Unreal Engine', 'C#', 'C++', 'JavaScript', 'Python',
    'Photoshop', 'Blender', 'Maya', 'Aseprite', 'Git', 'Agile',
    'Game Design', 'Level Design', 'UI Design', 'Sound Design'
  ];


  // --- FUNÇÕES EM PORTUGUÊS ---

  abrirModalEdicao() {
    // Cria uma cópia dos dados atuais para o rascunho
    // Isso evita alterar o perfil principal antes de clicar em "Salvar"
    this.perfilEmEdicao = JSON.parse(JSON.stringify(this.meuPerfil));
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  salvarAlteracoes() {
    // Atualiza o perfil principal com os dados do rascunho
    this.meuPerfil = { ...this.perfilEmEdicao };
    
    // Se o nome mudou, atualiza a URL da foto (opcional, só para o avatar mudar)
    this.meuPerfil.fotoUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${this.meuPerfil.nome.replace(' ', '')}`;
    
    this.fecharModal();
    // Aqui você chamaria seu serviço de backend para salvar no banco de dados
    alert('Perfil atualizado com sucesso! (Simulação)');
  }

  // Função para marcar/desmarcar habilidades no modal
  alternarHabilidade(habilidade: string) {
    const index = this.perfilEmEdicao.habilidades.indexOf(habilidade);
    if (index > -1) {
      // Se já existe, remove
      this.perfilEmEdicao.habilidades.splice(index, 1);
    } else {
      // Se não existe, adiciona
      this.perfilEmEdicao.habilidades.push(habilidade);
    }
  }

  // Verifica se uma habilidade está selecionada (para o CSS do botão)
  habilidadeEstaSelecionada(habilidade: string): boolean {
    return this.perfilEmEdicao.habilidades.includes(habilidade);
  }
}
