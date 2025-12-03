import { Component } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule], 
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router: Router) {}

  // Dados do formulário
  dadosCadastro = {
    nome: '',
    email: '',
    senha: '',
    profissao: ''
  };

  termosAceitos: boolean = false;
  mostrarErroTermos: boolean = false;

  cadastrar() {
    // 1. Validação dos Termos
    if (!this.termosAceitos) {
      this.mostrarErroTermos = true;
      return;
    }

    // 2. Validação de Campos Vazios
    if (!this.dadosCadastro.nome || !this.dadosCadastro.email || !this.dadosCadastro.senha || !this.dadosCadastro.profissao) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // 3. Recuperar lista de usuários existentes (ou criar lista vazia)
    const usuariosSalvos = JSON.parse(localStorage.getItem('indiehub_users_db') || '[]');

    // 4. Verificar se o email já existe
    const usuarioExiste = usuariosSalvos.find((u: any) => u.email === this.dadosCadastro.email);

    if (usuarioExiste) {
      alert("Este email já está cadastrado!");
      return;
    }

    // 5. Criar novo usuário com dados extras padrão
    const novoUsuario = {
      ...this.dadosCadastro,
      avatar: 'https://i.pravatar.cc/150?img=' + Math.floor(Math.random() * 70), // Avatar aleatório
      banner: 'https://picsum.photos/1200/300', // Banner padrão
      titulo: this.dadosCadastro.profissao, // Usa a profissão como título inicial
      bio: 'Olá! Sou novo na comunidade IndieHub.',
      stats: { projetos: 0, seguidores: 0, seguindo: 0 },
      skills: []
    };

    // 6. Adicionar na lista e salvar no LocalStorage
    usuariosSalvos.push(novoUsuario);
    localStorage.setItem('indiehub_users_db', JSON.stringify(usuariosSalvos));

    alert('Cadastro realizado com sucesso! Faça login para continuar.');
    this.router.navigate(['/login']);
  }
}