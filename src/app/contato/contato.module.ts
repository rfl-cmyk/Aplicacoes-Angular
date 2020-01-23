import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';

import { ContatoComponent } from './contato.component';
import { ContatoRoutingModule } from './contato-routing.module';

@NgModule({
  declarations: [ ContatoComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    TextMaskModule,
    ContatoRoutingModule
  ],
  providers: []
})

export class ContatoModule { }
