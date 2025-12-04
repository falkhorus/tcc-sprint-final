import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component'; // Importa o arquivo
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";


// Define o formato que um Talento deve ter
interface Talento {
  nome: string;
  cargo: string;
  xp: string;
  foto: string;
  corCargo: string;
  local: string;
  valorHora: string;
  biografia: string;
  portifolio?: string;   // A '?' significa que é opcional
  habilidades?: string[]; // Array de strings opcional
  generos?: string[];     // Array de strings opcional
  expandido?: boolean;  // Propriedade para controlar se o card está aberto
}




@Component({
  selector: 'app-nexus',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FormsModule, RouterLink], // Autoriza o uso
  templateUrl: './nexus.component.html',
  styleUrl: './nexus.component.css'
})



export class NexusComponent {
  

  
 


  alterarOpcao(opcao: string) {
    this.opcaoSelecionada = opcao;
  }

  
  

  talentos: Talento[] = [ {

    // Ao adicionar o : Talento[], eu reforço o TypeScript a aceitar a estrutura 
    // que definimos na interface. E como colocamos o ponto de interrogação (?) em
    //  habilidades?: string[], o código não vai quebrar para a Ana Silva e o Carlos
    //  (que ainda não têm habilidades cadastradas), mas vai funcionar perfeitamente
    //  para os novos perfis que você adicionar pelo modal.


    nome: 'Ana Silva',
    cargo: 'Game Designer',
    xp: '3 anos de experiência',
    foto: 'perfil_1.png',
    corCargo: '#9333EA',
    local: 'Salvador, BA',
    valorHora: 'R$ 80/h',
    biografia: 'Game Designer focada em narrativas imersivas e gameplay fluido. Busco colaborações para criar RPGs e Aventuras únicos.',
    
  },


  {
      nome: 'Carlos Santos',
      cargo: 'Programador',
      xp: '5 anos de experiência',
      local: 'Rio de Janeiro, RJ',
      foto: 'perfil_3.png',
      corCargo: '#2563eb', 
      valorHora: 'R$ 100/h',
      portifolio: 'www.behance.com',
      biografia : 'Especialista em Unity e C# com foco em performance e código limpo. Criando sistemas escaláveis e shaders avançados.'
    },
    {
      nome: 'Maria Oliveira',
      cargo: 'Artist 2D',
      xp: '4 anos de experiência',
      local: 'Belo Horizonte, MG',
      foto: 'perfil_2.png',
      corCargo: '#db2777',
      valorHora: 'R$ 70/h',
      portifolio: 'www.behance.com',
      biografia: 'Ilustradora e Pixel Artist especialista em estética retrô. Crio personagens e cenários atmosféricos cheios de vida.'
    },
    {
      nome: 'João Costa',
      cargo: 'Sound Designer',
      xp: '6 anos de experiência',
      local: 'Porto Alegre, RS',
      foto: 'perfil_5.png',
      corCargo: '#ea580c', 
      valorHora: 'R$ 90/h',
      portifolio: 'www.behance.com',
      biografia: 'Compositor e Sound Designer focado em imersão. Especialista em FMOD e áudio dinâmico para trilhas sonoras impactantes.'
    },
    {
      nome: 'Fernanda Lima',
      cargo: 'Artist 3D',
      xp: '2 anos de experiência',
      local: 'Recife, PE',
      foto: 'perfil_4.png',
      corCargo: '#7c3aed', 
      valorHora: 'R$ 75/h',
      portifolio: 'www.behance.com',
      biografia: 'Especialista em 3D Low Poly e texturas Hand-painted. Uso Blender e ZBrush para criar assets otimizados para jogos.'
    },
    {
      nome: 'Pedro Rocha',
      cargo: 'Animator',
      xp: '4 anos de experiência',
      local: 'Curitiba, PR',
      foto: 'perfil_6.png',
      corCargo: '#059669',
      valorHora: 'R$ 85/h', 
      portifolio: 'www.behance.com',
      biografia: 'Animador 2D/3D focado em dar vida e fluidez aos movimentos. Especialista em Spine e animação frame-a-frame.'
    }

    


    


  ];


  vagas = [
    {
      titulo: 'Game Designer Pleno',
      empresa: 'IndieCorp Studios',
      descricao: 'Procuramos um Game Designer experiente para trabalhar em um RPG indie ambicioso.',
      genero: 'RPG',
      salario: 'R$ 4.000 - R$ 6.000',
      requisitos: '3+ anos de experiência, Portfolio sólido',
      tipo: 'Full-time'
    },
    {
      titulo: 'Programador Unity',
      empresa: 'PixelWorks',
      descricao: 'Desenvolvimento de sistemas de gameplay para plataforma 2D.',
      genero: 'Plataforma',
      salario: 'R$ 5.000 - R$ 7.000',
      requisitos: 'C# avançado, Git',
      tipo: 'Freelance'
    },
    {
      titulo: 'Pixel Artist',
      empresa: 'Retro Games',
      descricao: 'Criação de assets e animações para jogo estilo 16-bits.',
      genero: 'Aventura',
      salario: 'A combinar',
      requisitos: 'Aseprite, Noções de animação',
      tipo: 'Contrato'
    }
  ];


  opcaoSelecionada = 'contratando'
  modalAberto = false;

   //Controle do Modal de VAGA
  modalVagaAberto = false;

  // --- Funções do Perfil ---
  abrirModal() { 
    this.modalAberto = true;
    this.indexEdicaoTalento = -1; // Garante modo "Adicionar"
    // Limpa o formulário
    this.novoTalento = { nome: '', cargo: '', xp: '', local: '', foto: '', corCargo: '', valorHora: '', portifolio: '', biografia: '', habilidades: [], generos: [] };
  }


  fecharModal() {
     this.modalAberto = false; }

  // --- Funções da Vaga ---
  abrirModalVaga() {
    this.modalVagaAberto = true;
    this.indexEdicaoVaga = -1; // Garante modo "Adicionar"
    // Limpa o formulário
    this.novaVaga = { titulo: '', empresa: '', descricao: '', genero: '', salario: '', requisitos: '', tipo: '' };
  }

   fecharModalVaga() {
    this.modalVagaAberto = false;
  }

  togglePerfil(talento: Talento) {
  // Inverte o valor: de false vira true, de true vira false
  talento.expandido = !talento.expandido;
  }

  // Controle de Edição (-1 significa que não está editando ninguém)
  indexEdicaoTalento: number = -1;
  indexEdicaoVaga: number = -1;
  

  // --------------LÓGICA DE BUSCA----------------------

  textoBusca: string = '';
  filtroCargo: string = '';


  // -----LÓGICA PARA FILTRO DE TALENTOS-----

  get talentosFiltrados() {
    const termo = this.textoBusca.toLowerCase();
    const cargoSelecionado = this.filtroCargo.toLowerCase();

    return this.talentos.filter(talento => {
      
      // Lógica para verificar a lista de gêneros (segura contra erros se a lista for vazia)
      const temGenero = talento.generos?.some(gen => gen.toLowerCase().includes(termo));

      // Verifica Texto (Nome OU Cargo OU Algum Gênero da lista)
      const bateTexto = talento.nome.toLowerCase().includes(termo) || 
                        talento.cargo.toLowerCase().includes(termo) ||
                        temGenero; 

      // Verifica Cargo (Filtro do Select)
      const bateCargo = this.filtroCargo === '' || talento.cargo.toLowerCase().includes(cargoSelecionado);

      return bateTexto && bateCargo;
    });
  }

  // -----LÓGICA PARA FILTRO DE VAGAS-----

  get vagasFiltradas() {
    const termo = this.textoBusca.toLowerCase();
    const cargoSelecionado = this.filtroCargo.toLowerCase();

    return this.vagas.filter(vaga => {
      // 1. Verifica Texto (Título OU Empresa OU Gênero)
      const bateTexto = vaga.titulo.toLowerCase().includes(termo) || 
                        vaga.empresa.toLowerCase().includes(termo) ||
                        vaga.genero.toLowerCase().includes(termo); // <--- LINHA NOVA!

      // Verifica Cargo (Filtro do Select)
      // Nas vagas, compara o select com o Título da vaga
      const bateCargo = this.filtroCargo === '' || vaga.titulo.toLowerCase().includes(cargoSelecionado);

      return bateTexto && bateCargo;
    });
  }





  // ------------------LISTAS PARA O MODAL 1---
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


  titulo!: string;

  // --- LÓGICA: Objeto temporário para guardar a NOVA VAGA ---
  novaVaga = {
    titulo: '',
    empresa: '',
    descricao: '',
    genero: '',
    salario: '',
    requisitos: '',
    tipo: '',
    
    
    
    
  };

  // Função para SALVAR
  salvarVaga() {
    const vagaPronta = { ...this.novaVaga };

    if (this.indexEdicaoVaga > -1) {
      // MODO EDIÇÃO
      this.vagas[this.indexEdicaoVaga] = vagaPronta;
    } else {
      // MODO CRIAÇÃO
      this.vagas.push(vagaPronta);
    }

    this.fecharModalVaga();

  }

  

  // --------- LÓGICA: Objeto temporário para guardar ADICIONAR PERFIL (Talentos)------




  novoTalento = {
    nome: '',
    cargo: '',
    xp: '',
    local: '',
    foto: '',
    corCargo: '',
    valorHora: '',
    portifolio: '',
    biografia: '',
    habilidades: [] as string[], //  Array de strings
    generos: [] as string[],     // Array de strings
  };


  // Cria a função para alternar (marcar/desmarcar) Habilidades
  toggleHabilidade(skill: string) {
    const index = this.novoTalento.habilidades.indexOf(skill);
    
    if (index > -1) {
      // Se já existe, remove (desmarca)
      this.novoTalento.habilidades.splice(index, 1);
    } else {
      // Se não existe, adiciona (marca)
      this.novoTalento.habilidades.push(skill);
    }
  }

  // 3. Cria a função para alternar Gêneros (mesma lógica)
  toggleGenero(genero: string) {
    const index = this.novoTalento.generos.indexOf(genero);
    
    if (index > -1) {
      this.novoTalento.generos.splice(index, 1);
    } else {
      this.novoTalento.generos.push(genero);
    }
  }



  // -------LÓGICA PARA TALENTOS-----

  deletarTalento(index: number) {
    if(confirm("Tem certeza que deseja excluir este perfil?")) {
      this.talentos.splice(index, 1); // Remove 1 item na posição index
    }
  }

  prepararEdicaoTalento(item: any, index: number) {
    this.indexEdicaoTalento = index; // Guarda quem estamos editando
    this.modalAberto = true; // Abre o modal
    
    // Copia os dados do card para o formulário (o ... chama-se Spread Operator)
    this.novoTalento = { ...item }; 
  }

  // --------LÓGICA PARA VAGAS----------

  deletarVaga(index: number) {
    if(confirm("Tem certeza que deseja excluir esta vaga?")) {
      this.vagas.splice(index, 1);
    }
  }

  prepararEdicaoVaga(item: any, index: number) {
    this.indexEdicaoVaga = index;
    this.modalVagaAberto = true;
    this.novaVaga = { ...item };
  }





  // Função para SALVAR Talento
  salvarTalento() {
    const profissaoObj = this.listaProfissoes.find(p => p.nome === this.novoTalento.cargo);
    const corFinal = profissaoObj ? profissaoObj.cor : '#000';

    const talentoPronto = {
      ...this.novoTalento, // Copia tudo que já está no rascunho
      
      // Garante que o valorHora seja passado explicitamente (caso o spread operator falhe ou a ordem importe)
      valorHora: this.novoTalento.valorHora, 
      
      foto: this.novoTalento.foto || 'https://th.bing.com/th/id/OIP.XfxQMHh2_CFOhUhL7YCB-wHaFj?w=267&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      corCargo: corFinal
    };

    if (this.indexEdicaoTalento > -1) {
      this.talentos[this.indexEdicaoTalento] = talentoPronto;
    } else {
      this.talentos.push(talentoPronto);
    }

    // Limpa o formulário
    this.novoTalento = {
      nome: '', cargo: '', xp: '', local: '', foto: '', 
      corCargo: '', valorHora: '', portifolio: '', biografia: '', 
      habilidades: [], generos: []
    };

    this.fecharModal();
  }


  // Cria essa lista definindo Nome e Cor Hexadecimal
  listaProfissoes = [
    { nome: 'Game Designer',      cor: '#9333EA' }, // Roxo
    { nome: 'Programador',        cor: '#2563eb' }, // Azul
    { nome: 'Artista 2D',         cor: '#db2777' }, // Rosa
    { nome: 'Artista 3D',         cor: '#7c3aed' }, // Roxo Escuro
    { nome: 'Animador',           cor: '#059669' }, // Verde
    { nome: 'Designer de Som',    cor: '#ea580c' }, // Laranja
    { nome: 'Compositor Musical', cor: '#d97706' }, // Amarelo
    { nome: 'Produtor de Jogos',  cor: '#dc2626' }, // Vermelho
    { nome: 'QA Tester',          cor: '#4b5563' }, // Cinza
    { nome: 'Marketing',          cor: '#0891b2' }, // Ciano
    { nome: 'Escritor',           cor: '#4f46e5' }, // Índigo
    { nome: 'UI/UX Design',       cor: '#c026d3' }  // Magenta
  ];

  //  Cria um "Getter" para descobrir a cor atual do que foi selecionado no Modal
  //  serve para pintar o texto do <select> dinamicamente
  get corAtualSelecao() {
    const profissaoEncontrada = this.listaProfissoes.find(p => p.nome === this.novoTalento.cargo);
    return profissaoEncontrada ? profissaoEncontrada.cor : '#333'; // Retorna a cor ou preto se não achar
  }













 
}
