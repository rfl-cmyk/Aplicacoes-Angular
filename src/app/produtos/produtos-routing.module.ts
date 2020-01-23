import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosComponent } from './produtos.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { PerguntaComponent } from './detalhes/pergunta/pergunta.component';
import { GuardasGuard } from '../guardas/guardas.guard';

const produtosRoutes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: 'nao-encontrado', component: NaoEncontradoComponent },
  {
    path: 'produto/:id', component: DetalhesComponent, children: [
      { path: 'pergunta', component: PerguntaComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(produtosRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProdutosRoutingModule { }
