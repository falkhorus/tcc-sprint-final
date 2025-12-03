import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importante para o vídeo

interface Projeto {
  titulo: string;
  autor: string;
  descricao: string;
  imagem: string;
  video?: string; // Link original (texto)
  videoSafe?: SafeResourceUrl; // Link seguro para o iframe
  genero: string;
  status: string;
  statusClass: string;
  tags: string[];
  likes: number;
  curtido: boolean;
  comentarios: number;
  listaComentarios: string[];
}

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule], 
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})
export class MuralComponent {

  // Injetamos o Sanitizer aqui no construtor
  constructor(private sanitizer: DomSanitizer) {}

  modalAberto = false;
  modalDetalhesAberto = false;
  projetoSelecionado: Projeto | null = null;
  indexEdicao: number = -1;
  textoBusca: string = '';
  filtroGenero: string = '';
  novoComentario: string = '';

  projetos: Projeto[] = [
    {
      titulo: 'Mystic Realms',
      autor: 'Ana Silva',
      descricao: 'Um RPG de fantasia com mecânicas inovadoras.',
      imagem: 'https://cdn.discordapp.com/attachments/1432328327707758635/1443341619347718338/eSTYsqFbNtdwlbkdCcvpa6sZ3WtXsPaKaF2Wyv5qeUGymROCLCddeKdNOzZRcmAAA.png?ex=6928b822&is=692766a2&hm=224fc86a8266c59afb1802044a4f7e5f91ec80de3854f8e274c66dbd8c82faee&',
      // Exemplo de vídeo real do YouTube (Trailer de Celeste)
      video: 'https://www.youtube.com/watch?v=70d9irlxiB4', 
      genero: 'RPG',
      status: 'Em Desenvolvimento',
      statusClass: 'status-dev',
      tags: ['Fantasy', 'Turn-based'],
      likes: 42,
      curtido: false,
      comentarios: 2,
      listaComentarios: ['Incrível!']
    },
    // ... seus outros projetos ...
  ];

  novoProjeto = {
    titulo: '', genero: '', status: 'Em Desenvolvimento', descricao: '', imagem: '', video: '', tagsInput: ''
  };

  // ... (Seus getters de filtro continuam aqui iguais) ...
  // LÓGICA DE RANKING ADICIONADA AQUI (.sort)
  get projetosFiltrados() {
    let listaFiltrada = this.projetos;

    // 1. Filtro de Busca (Texto) e Gênero
    if (this.textoBusca || this.filtroGenero) {
        const termo = this.textoBusca.toLowerCase().trim();
        const generoSelecionado = this.filtroGenero.toLowerCase();
        
        listaFiltrada = this.projetos.filter(projeto => {
            const bateTexto = projeto.titulo.toLowerCase().includes(termo) ||
                              projeto.autor.toLowerCase().includes(termo) ||
                              projeto.tags.some(tag => tag.toLowerCase().includes(termo));
            const bateGenero = this.filtroGenero === '' || projeto.genero.toLowerCase() === generoSelecionado;
            return bateTexto && bateGenero;
        });
    }

    // 2. Ordenação por Likes (Maior para o Menor)
    // sort modifica o array, mas como o filter retorna um novo array (ou copiamos acima), é seguro.
    return listaFiltrada.sort((a, b) => b.likes - a.likes);
  }

  abrirModal() { 
    this.modalAberto = true;
    this.indexEdicao = -1;
    this.novoProjeto = { titulo: '', genero: '', status: 'Em Desenvolvimento', descricao: '', imagem: '', video: '', tagsInput: '' };
  }

  fecharModal() { this.modalAberto = false; }

  prepararEdicao(projeto: Projeto, event: Event) {
    event.stopPropagation(); 
    this.indexEdicao = this.projetos.indexOf(projeto); 
    this.modalAberto = true;
    this.novoProjeto = {
      titulo: projeto.titulo,
      genero: projeto.genero,
      status: projeto.status,
      descricao: projeto.descricao,
      imagem: projeto.imagem,
      video: projeto.video || '',
      tagsInput: projeto.tags.join(', ') 
    };
  }

  deletarProjeto(projeto: Projeto, event: Event) {
    event.stopPropagation(); 
    if(confirm("Tem certeza que deseja excluir este projeto?")) {
      const index = this.projetos.indexOf(projeto);
      if (index > -1) this.projetos.splice(index, 1);
    }
  }

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
      likes: this.indexEdicao > -1 ? this.projetos[this.indexEdicao].likes : 0,
      curtido: this.indexEdicao > -1 ? this.projetos[this.indexEdicao].curtido : false,
      comentarios: this.indexEdicao > -1 ? this.projetos[this.indexEdicao].comentarios : 0,
      listaComentarios: this.indexEdicao > -1 ? this.projetos[this.indexEdicao].listaComentarios : []
    };

    if (this.indexEdicao > -1) {
      this.projetos[this.indexEdicao] = projetoPronto;
    } else {
      this.projetos.unshift(projetoPronto);
    }
    this.fecharModal();
  }

  toggleLike(projeto: Projeto, event: Event) {
    event.stopPropagation();
    if (projeto.curtido) {
      projeto.likes--;
      projeto.curtido = false;
    } else {
      projeto.likes++;
      projeto.curtido = true;
    }
  }

  adicionarComentario() {
    if (this.projetoSelecionado && this.novoComentario.trim()) {
      this.projetoSelecionado.listaComentarios.push(this.novoComentario);
      this.projetoSelecionado.comentarios = this.projetoSelecionado.listaComentarios.length;
      this.novoComentario = '';
    }
  }

  // --- FUNÇÃO QUE CORRIGE O LINK DO YOUTUBE ---
  // --- NOVA FUNÇÃO ROBUSTA ---
  extrairIdYoutube(url: string): string | null {
    if (!url) return null;
    
    // Regex que pega ID de links: youtube.com/watch?v=, youtu.be/, youtube.com/embed/, etc.
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);

    // O ID do YouTube tem sempre 11 caracteres
    return (match && match[2].length === 11) ? match[2] : null;
  }

  getEmbedUrl(url: string): string {
    const videoId = this.extrairIdYoutube(url);
    
    // Se achou o ID, retorna o link de embed oficial. Se não, retorna vazio.
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  }

  abrirDetalhes(projeto: Projeto) {
    this.projetoSelecionado = projeto;
    
    if (projeto.video) {
      const embedUrl = this.getEmbedUrl(projeto.video);
      
      // Só sanitiza se gerou uma URL válida
      if (embedUrl) {
        this.projetoSelecionado.videoSafe = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
      } else {
        this.projetoSelecionado.videoSafe = undefined; // Garante que não exibe iframe quebrado
      }
    }
    
    this.modalDetalhesAberto = true;
  }

  fecharDetalhes() {
    this.modalDetalhesAberto = false;
    this.projetoSelecionado = null;
    this.novoComentario = '';
  }
}