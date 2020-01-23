import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { ProdutosService } from './produtos.service';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { PerguntaComponent } from './detalhes/pergunta/pergunta.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

@NgModule({
  declarations: [
    ProdutosComponent,
    NaoEncontradoComponent,
    PerguntaComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ],
  providers: [ ProdutosService ],
  exports: [ ProdutosRoutingModule ]
})

export class ProdutosModule { }
