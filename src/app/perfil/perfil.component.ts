import { Component, OnInit } from '@angular/core'; // Adicione OnInit
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importante para redirecionamento

// --- INTERFACE PARA O PERFIL ---
export interface UsuarioPerfil {
  nome: string;
  email: string;
  profissao: string;
  fotoUrl: string;
  moedas: number;
  localizacao?: string;
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
export class PerfilComponent implements OnInit {

  // Injetar Router no construtor
  constructor(private router: Router) {}

  // --- ESTADO ---
  modalAberto = false;

  // Inicializa vazio (será preenchido no ngOnInit com dados reais)
  meuPerfil: UsuarioPerfil = {
    nome: '',
    email: '',
    profissao: '',
    fotoUrl: '',
    moedas: 0,
    habilidades: [],
    linksSociais: {}
  };

  // Objeto Rascunho
  perfilEmEdicao: UsuarioPerfil = { ...this.meuPerfil };

  // --- LISTAS AUXILIARES ---
  listaProfissoes = [
    'Game Designer', 'Programador', 'Artista 2D', 'Artista 3D',
    'Animador', 'Sound Designer', 'Produtor', 'QA Tester'
  ];

  listaHabilidadesDisponiveis = [
    'Unity', 'Unreal Engine', 'C#', 'C++', 'JavaScript', 'Python',
    'Photoshop', 'Blender', 'Maya', 'Aseprite', 'Git', 'Agile',
    'Game Design', 'Level Design', 'UI Design', 'Sound Design'
  ];

  // --- AO INICIAR A TELA ---
  ngOnInit() {
    // 1. Verifica se tem usuário logado na sessão
    const sessaoString = localStorage.getItem('indiehub_sessao');

    if (sessaoString) {
      // Carrega os dados do LocalStorage para a variável do componente
      this.meuPerfil = JSON.parse(sessaoString);

      // --- GARANTIAS PARA EVITAR ERROS ---
      // Se o usuário veio do cadastro simples, alguns campos podem não existir ainda.
      // Criamos eles vazios para o HTML não quebrar.
      if (!this.meuPerfil.habilidades) this.meuPerfil.habilidades = [];
      if (!this.meuPerfil.linksSociais) this.meuPerfil.linksSociais = {};
      
      // Se não tiver foto, coloca um avatar padrão gerado pelo nome
      if (!this.meuPerfil.fotoUrl) {
         this.meuPerfil.fotoUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${this.meuPerfil.nome.replace(' ', '')}`;
      }

    } else {
      // 2. Se não estiver logado, redireciona para o login
      this.router.navigate(['/login']);
    }
  }

  // --- FUNÇÕES ---

  abrirModalEdicao() {
    // Clona os dados atuais para o modo de edição
    this.perfilEmEdicao = JSON.parse(JSON.stringify(this.meuPerfil));
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  salvarAlteracoes() {
    // 1. Atualiza a visualização local
    this.meuPerfil = { ...this.perfilEmEdicao };
    
    // Se o usuário deixou a foto vazia, gera uma automática
    if (!this.meuPerfil.fotoUrl.trim()) {
        this.meuPerfil.fotoUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${this.meuPerfil.nome.replace(' ', '')}`;
    }

    // 2. SALVAR NA SESSÃO ATUAL (Para não perder ao dar F5)
    localStorage.setItem('indiehub_sessao', JSON.stringify(this.meuPerfil));

    // 3. SALVAR NO "BANCO DE DADOS" (Lista de usuários)
    // Isso garante que se ele deslogar e logar de novo, as alterações persistam
    const usuariosDb = JSON.parse(localStorage.getItem('indiehub_users_db') || '[]');
    
    // Encontra o usuário na lista pelo Email (que é único)
    const index = usuariosDb.findIndex((u: any) => u.email === this.meuPerfil.email);
    
    if (index !== -1) {
      usuariosDb[index] = this.meuPerfil; // Atualiza o objeto na lista
      localStorage.setItem('indiehub_users_db', JSON.stringify(usuariosDb)); // Salva a lista de volta
    }

    this.fecharModal();
    alert('Perfil atualizado com sucesso!');
  }

  alternarHabilidade(habilidade: string) {
    // Garante que o array existe
    if (!this.perfilEmEdicao.habilidades) {
        this.perfilEmEdicao.habilidades = [];
    }

    const index = this.perfilEmEdicao.habilidades.indexOf(habilidade);
    if (index > -1) {
      this.perfilEmEdicao.habilidades.splice(index, 1);
    } else {
      this.perfilEmEdicao.habilidades.push(habilidade);
    }
  }

  habilidadeEstaSelecionada(habilidade: string): boolean {
    return this.perfilEmEdicao.habilidades ? this.perfilEmEdicao.habilidades.includes(habilidade) : false;
  }
}