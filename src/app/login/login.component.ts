import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AutenticacaoService } from './autenticacao.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit() {

  }

  fazerLogin() {
    this.autenticacaoService.fazerLogin(this.usuario);
  }

}
