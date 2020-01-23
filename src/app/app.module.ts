import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacaoService } from './login/autenticacao.service';
import { GuardasGuard } from './guardas/guardas.guard';
import { ListComponent } from './crud/list/list.component';
import { EditComponent } from './crud/edit/edit.component';
import { TextMaskModule } from 'angular2-text-mask';
import { HomeComponent } from './home/home.component';

registerLocaleData(localePt); //tradução

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    TextMaskModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    AutenticacaoService,
    GuardasGuard
  ],
  bootstrap: [AppComponent],
  exports: [ AppRoutingModule ]
})

export class AppModule { }
