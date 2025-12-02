import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importante para o vídeo do YouTube

interface Projeto {
  titulo: string;
  autor: string;
  descricao: string;
  imagem: string;
  video?: string; // Opcional: Link do YouTube
  videoSafe?: SafeResourceUrl; // Opcional: Link seguro para iframe
  genero: string;
  status: string;
  statusClass: string;
  tags: string[];
  likes: number;
  curtido: boolean; // Controle se o usuário já deu like
  comentarios: number;
}

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule], 
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})
export class MuralComponent {

  constructor(private sanitizer: DomSanitizer) {}

  // --- CONTROLE DOS MODAIS ---
  modalAberto = false;          // Modal de Adicionar
  modalDetalhesAberto = false;  // Modal de Ver Detalhes
  
  projetoSelecionado: Projeto | null = null; // Guarda o projeto clicado

  // --- BUSCA E FILTROS ---
  textoBusca: string = '';
  filtroGenero: string = '';

  // --- DADOS DOS PROJETOS ---
  projetos: Projeto[] = [
    {
      titulo: 'Mystic Realms',
      autor: 'Ana Silva',
      descricao: 'Um RPG de fantasia com mecânicas inovadoras de magia e combate estratégico. Explore masmorras, lute contra dragões e descubra segredos antigos.',
      imagem: 'data:image/jpeg;base64,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',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Exemplo de vídeo
      genero: 'RPG',
      status: 'Em Desenvolvimento',
      statusClass: 'status-dev',
      tags: ['Fantasy', 'Turn-based', 'Magic'],
      likes: 42,
      curtido: false,
      comentarios: 12
    },
    {
      titulo: 'Cyber Runner',
      autor: 'Carlos Santos',
      descricao: 'Plataformer cyberpunk com parkour futurista em ambientes neon. Corra contra o tempo e hackeie sistemas para sobreviver.',
      imagem: 'https://i.scdn.co/image/ab67616d0000b2738c7780fbe1c5390e33431ecc',
      genero: 'Ação',
      status: 'Beta',
      statusClass: 'status-beta',
      tags: ['Cyberpunk', 'Parkour', 'Neon'],
      likes: 128,
      curtido: true, // Esse já começa curtido para testar
      comentarios: 45
    },
    {
      titulo: 'Pixel Farm',
      autor: 'Maria Oliveira',
      descricao: 'Simulador de fazenda em pixel art com sistema de cultivo realista. Cuide dos animais, plante colheitas e faça amigos na vila.',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlUTCNnQhfsYXndMT2UhUrmMyz3e0hWteWg&s',
      genero: 'Simulação',
      status: 'Lançado',
      statusClass: 'status-lancado',
      tags: ['Pixel Art', 'Farming', 'Relaxing'],
      likes: 89,
      curtido: false,
      comentarios: 34
    },
    {
      titulo: 'Space Odyssey',
      autor: 'João Costa',
      descricao: 'Exploração espacial procedural com batalhas de naves. Viaje por galáxias infinitas e encontre civilizações alienígenas.',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN96mp95r__FaIuBYWZZYNfke9kN2o8wzwKA&s',
      genero: 'Sci-Fi',
      status: 'Em Desenvolvimento',
      statusClass: 'status-dev',
      tags: ['Space', 'Procedural', 'Shooter'],
      likes: 56,
      curtido: false,
      comentarios: 8
    }
  ];

  // --- LÓGICA DE FILTRO ---
  get projetosFiltrados() {
    if (!this.textoBusca && !this.filtroGenero) return this.projetos;

    const termo = this.textoBusca.toLowerCase().trim();
    const generoSelecionado = this.filtroGenero.toLowerCase();

    return this.projetos.filter(projeto => {
      // 1. Verifica Texto (Título, Autor ou Tags)
      const bateTexto = projeto.titulo.toLowerCase().includes(termo) ||
                        projeto.autor.toLowerCase().includes(termo) ||
                        projeto.tags.some(tag => tag.toLowerCase().includes(termo));

      // 2. Verifica Gênero
      const bateGenero = this.filtroGenero === '' || projeto.genero.toLowerCase() === generoSelecionado;

      return bateTexto && bateGenero;
    });
  }

  // --- LÓGICA DE CURTIR (LIKE) ---
  toggleLike(projeto: Projeto, event: Event) {
    // Impede que o clique no coração abra o modal de detalhes
    event.stopPropagation();

    if (projeto.curtido) {
      // Se já curtiu, desmarca e remove 1
      projeto.likes--;
      projeto.curtido = false;
    } else {
      // Se não curtiu, marca e adiciona 1
      projeto.likes++;
      projeto.curtido = true;
    }
  }

  // --- LÓGICA DO MODAL DE DETALHES ---
  abrirDetalhes(projeto: Projeto) {
    this.projetoSelecionado = projeto;
    
    // Tratamento de segurança para vídeo do Youtube (se houver)
    if (projeto.video) {
      this.projetoSelecionado.videoSafe = this.sanitizer.bypassSecurityTrustResourceUrl(projeto.video);
    }
    
    this.modalDetalhesAberto = true;
  }

  fecharDetalhes() {
    this.modalDetalhesAberto = false;
    this.projetoSelecionado = null;
  }

  // --- LÓGICA DO MODAL DE ADICIONAR (Antiga) ---
  novoProjeto = { titulo: '', genero: '', status: 'Em Desenvolvimento', descricao: '', imagem: '', video: '', tagsInput: '' };

  abrirModal() { 
    this.modalAberto = true;
    this.novoProjeto = { titulo: '', genero: '', status: 'Em Desenvolvimento', descricao: '', imagem: '', video: '', tagsInput: '' };
  }

  fecharModal() { this.modalAberto = false; }

  salvarProjeto() {
    let classeStatus = 'status-dev';
    if (this.novoProjeto.status === 'Beta') classeStatus = 'status-beta';
    if (this.novoProjeto.status === 'Lançado') classeStatus = 'status-lancado';

    const listaTags = this.novoProjeto.tagsInput.split(',').map(t => t.trim()).filter(t => t !== '');

    const projetoPronto: Projeto = {
      titulo: this.novoProjeto.titulo,
      autor: 'Você',
      descricao: this.novoProjeto.descricao,
      imagem: this.novoProjeto.imagem || `https://picsum.photos/400/200?random=${Math.random()}`,
      video: this.novoProjeto.video,
      genero: this.novoProjeto.genero,
      status: this.novoProjeto.status,
      statusClass: classeStatus,
      tags: listaTags.length > 0 ? listaTags : ['Indie'],
      likes: 0,
      curtido: false,
      comentarios: 0
    };

    this.projetos.unshift(projetoPronto);
    this.fecharModal();
  }
}