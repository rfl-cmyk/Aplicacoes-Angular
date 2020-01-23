import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  produtos: any[];
  id: number;
  oProduto: any[];

  constructor(
    private produtosService: ProdutosService,
    private ativa: ActivatedRoute,
    private router: Router,
    ) {

    this.produtos = this.produtosService.getProdutos();
    this.id = this.ativa.snapshot.params['id'];

    if(this.id < this.produtos.length) {
      this.oProduto = this.produtos[this.id];
    } else {
      this.router.navigate(['/nao-encontrado']);
    }

  }

  ngOnInit() {}

}
