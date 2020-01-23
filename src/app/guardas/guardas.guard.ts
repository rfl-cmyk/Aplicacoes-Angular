import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AutenticacaoService } from '../login/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class GuardasGuard implements CanActivate { // implementa a classe CanActivate

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) {}

  canActivate( // método que deve ser implementado
    next: ActivatedRouteSnapshot, // parametro / variável que recebe as informações da rota
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.autenticacaoService.usuarioEstaAutenticado()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
