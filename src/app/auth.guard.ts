import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  // Injeção de dependência do Router (para poder redirecionar)
  const router = inject(Router);
  
  // 1. Verificar se existe a sessão no LocalStorage
  const sessaoUsuario = localStorage.getItem('indiehub_sessao');

  if (sessaoUsuario) {
    // SE TEM SESSÃO: Permite o acesso
    return true;
  } else {
    // SE NÃO TEM SESSÃO: Redireciona para o login e bloqueia o acesso
    alert('Você precisa fazer login para acessar essa página!'); // Opcional
    router.navigate(['/login']);
    return false;
  }
};