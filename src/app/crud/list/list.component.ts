import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Contato } from './../shared/contato';
import { ContatoService } from '../shared/contato.service';
import { ContatoDataService } from '../shared/contato-data.service';
import { AutenticacaoService } from 'src/app/login/autenticacao.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  contatos: Observable<any>;
  autenticacao: boolean;

  constructor(
    private contatoService: ContatoService,
    private contatoDataService: ContatoDataService,
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contatos = this.contatoService.getAll();
  }

  delete(key: string) {
    this.autenticacao = this.autenticacaoService.usuarioEstaAutenticado();
    if (this.autenticacao) {
      this.contatoService.delete(key);
    } else {
      alert('Você precisa estar logado.');
      this.router.navigate(['/login']);
    }
  }

  edit(contato: Contato, key: string) {
    this.contatoDataService.changeContato(contato, key);
  }

}
