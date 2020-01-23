import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})

export class AutenticacaoService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'Rafael' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;
      alert('Usuário logado com sucesso!');
      this.router.navigate(['/crud']);
    } else {
      this.usuarioAutenticado = false;
      alert('Usuário e(ou) senha inválido(s).');
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

}
