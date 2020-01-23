import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.component.html',
  styleUrls: ['./pergunta.component.css']
})
export class PerguntaComponent implements OnInit {

  duvida: string = '';

  constructor() { }

  ngOnInit() {
  }

  enviar() {
    let size = this.duvida.length;
    if (this.duvida == null || size < 10) {
      alert('Sua dúvida deve conter ao menos dez caracteres.');
    } else {
      alert('Sua dúvida foi enviada, em breve entraremos em contato..');
      this.reset();
    }
  }

  reset() {
    this.duvida = '';
  }

}
