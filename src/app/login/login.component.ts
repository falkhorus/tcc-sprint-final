import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}

  loginDados = {
    email: '',
    senha: ''
  };

  erroLogin: boolean = false; 

  entrar() {
    // 1. Recuperar o "Banco de Dados" de usuários
    const usuariosSalvos = JSON.parse(localStorage.getItem('indiehub_users_db') || '[]');

    // 2. Procurar usuário com mesmo Email E Senha
    const usuarioEncontrado = usuariosSalvos.find((u: any) => 
        u.email === this.loginDados.email && u.senha === this.loginDados.senha
    );

    if (usuarioEncontrado) {
      // SUCESSO!
      // Salvamos o usuário ATUAL em uma chave de sessão separada
      localStorage.setItem('indiehub_sessao', JSON.stringify(usuarioEncontrado));
      
      this.erroLogin = false;
      alert(`Bem-vindo de volta, ${usuarioEncontrado.nome}!`);
      this.router.navigate(['/nexus']); // Vai para a home/nexus
    } else {
      // FALHA
      this.erroLogin = true;
    }
  }

  // Função extra para testar rápido sem digitar (opcional)
  loginRapido() {
     this.loginDados.email = 'teste@indiehub.com';
     this.loginDados.senha = '123456';
     alert('Preenchi para você! Se não criou essa conta antes, vai dar erro.');
  }
}