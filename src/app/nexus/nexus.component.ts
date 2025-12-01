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
    foto: 'https://cdn.discordapp.com/attachments/1432328327707758635/1443341619347718338/eSTYsqFbNtdwlbkdCcvpa6sZ3WtXsPaKaF2Wyv5qeUGymROCLCddeKdNOzZRcmAAA.png?ex=6928b822&is=692766a2&hm=224fc86a8266c59afb1802044a4f7e5f91ec80de3854f8e274c66dbd8c82faee&',
    corCargo: '#9333EA',
    local: 'Salvador, BA',
    valorHora: 'R$ 80/h',
    biografia: '',
    
  },


  {
      nome: 'Carlos Santos',
      cargo: 'Programador',
      xp: '5 anos de experiência',
      local: 'Rio de Janeiro, RJ',
      foto: 'https://cdn.discordapp.com/attachments/1432328327707758635/1443341740445536356/OIP.png?ex=6928b83e&is=692766be&hm=e20198084532641853178df6ae36470000d6754278280ed19812bb2cc028f844&',
      corCargo: '#2563eb', 
      valorHora: 'R$ 100/h',
      portifolio: 'www.behance.com',
      biografia : 'Sou uma Game design experiente'
    },
    {
      nome: 'Maria Oliveira',
      cargo: 'Artist 2D',
      xp: '4 anos de experiência',
      local: 'Belo Horizonte, MG',
      foto: 'https://cdn.discordapp.com/attachments/1432328327707758635/1443341661542285332/hHNiAsANbmetbxkMNLTohkcZzvYNFnnWcLGm8MPzwh6cCC3BidVJGXEcqRVU2ci7oXrdhHF4Xx25TjE34LrTPzk5EcKIvYifsWJMpcNNpyMWbLM5kymWF5AAA.png?ex=6928b82c&is=692766ac&hm=91636b5d3c81e97d97477cb9494484452240cef94848ee65ccf89d1e90614ced&',
      corCargo: '#db2777',
      valorHora: 'R$ 70/h',
      portifolio: 'www.behance.com',
      biografia: 'Sou um Artista 2D com muitos anos de experiência'
    },
    {
      nome: 'João Costa',
      cargo: 'Sound Designer',
      xp: '6 anos de experiência',
      local: 'Porto Alegre, RS',
      foto: 'https://cdn.discordapp.com/attachments/1432328327707758635/1443342055186235503/OIP.png?ex=6928b889&is=69276709&hm=c4f858477c688bf76949c48947f5c89f48dc5d14b55763d8d64a42433acdb1d8&',
      corCargo: '#ea580c', 
      valorHora: 'R$ 90/h',
      portifolio: 'www.behance.com',
      biografia: ''
    },
    {
      nome: 'Fernanda Lima',
      cargo: 'Artist 3D',
      xp: '2 anos de experiência',
      local: 'Recife, PE',
      foto: 'https://cdn.discordapp.com/attachments/1432328327707758635/1443341903792701614/OIP.png?ex=6928b865&is=692766e5&hm=21bc30ebc202369ada54310bc8800b0893f9aa2614a15cfc6b90644587b5e890&',
      corCargo: '#7c3aed', 
      valorHora: 'R$ 75/h',
      portifolio: 'www.behance.com',
      biografia: ''
    },
    {
      nome: 'Pedro Rocha',
      cargo: 'Animator',
      xp: '4 anos de experiência',
      local: 'Curitiba, PR',
      foto: 'https://cdn.discordapp.com/attachments/1432328327707758635/1443342151470682122/OIP.png?ex=6928b8a0&is=69276720&hm=8a06aa67f204724172146130d461f3f007469d0a7da38c36cd3873fa4632d754&',
      corCargo: '#059669',
      valorHora: 'R$ 85/h', 
      portifolio: 'www.behance.com',
      biografia: ''
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

  togglePerfil(talento: Talento) {
  // Inverte o valor: de false vira true, de true vira false
  talento.expandido = !talento.expandido;
  }
  

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

  // -----LÓGICA PARA FILTRO DE TALENTOS-----

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
  salvarVaga() {        //  Cria o objeto final
    
    const vagaPronta = {
      titulo: this.novaVaga.titulo,
      empresa: this.novaVaga.empresa,
      tipo: this.novaVaga.tipo,
      descricao: this.novaVaga.descricao,
      genero: this.novaVaga.genero,
      salario: this.novaVaga.salario,
      requisitos: this.novaVaga.requisitos,

      
      
      
    };

    //  Empurra para a lista oficial (O card vai aparecer na hora!)
    this.vagas.push(vagaPronta);

    //  Limpa o formulário e fecha o modal
    this.novaVaga = { 
        titulo: '', empresa: '', descricao: '', genero: '', 
        salario: '', requisitos: '', tipo: ''
    };
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





  // Função para SALVAR Talento
  salvarTalento() {

    
    // Busca na lista qual é a cor da profissão que o usuário escolheu
    const profissaoObj = this.listaProfissoes.find(p => p.nome === this.novoTalento.cargo);
    const corFinal = profissaoObj ? profissaoObj.cor : '#000'; // Fallback preto

    const talentoPronto = {

      
      nome: this.novoTalento.nome,
      cargo: this.novoTalento.cargo,
      xp: this.novoTalento.xp,
      local: this.novoTalento.local,
      foto: this.novoTalento.foto || 'https://th.bing.com/th/id/OIP.XfxQMHh2_CFOhUhL7YCB-wHaFj?w=267&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',  // adiciona um fallback se não tiver foto
      corCargo: corFinal,
      valorHora: this.novoTalento.valorHora,
      portifolio: this.novoTalento.portifolio,
      biografia: this.novoTalento.biografia,
      habilidades: this.novoTalento.habilidades, // array
      generos: this.novoTalento.generos          // array
  

    };
    
    this.talentos.push(talentoPronto);
    


    this.novoTalento = {
    nome: '',
    cargo: '',
    xp: '',
    local: '',
    foto: '',
    corCargo: '',
    valorHora: '',
    portifolio: '',
    biografia: '',
    habilidades: [],
    generos: [],

    }

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
