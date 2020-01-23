import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})

export class ContatoComponent implements OnInit {

  formulario: FormGroup;
  transmissor: any;
  maskTEL = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  maskCEP = [/[1-9]/, /\d/,/\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({ // implementa a classe FormBuilder.group
      nome: [null, [Validators.required, Validators.minLength(3)]], // array com as informações do campo 'nome' sendo null seu valor inicial
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, Validators.required],

      endereco: this.formBuilder.group({ // cria um grupo chamado 'endereco' para os campos abaixo
        cep: [null, Validators.required],
        rua: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }

  onSubmit() { // manda os dados para o servidor

    if(this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value)) // transforma em json
      .subscribe(
        dados => {
          console.log(dados); // mostra o que foi enviado
          alert('Dados enviados com sucesso!');
          this.resetar();
        },
        (erro: any) => alert('erro')
      );
    } else {
      alert('Preencha todos os campos obrigatorios!');
    }

  }

  resetar() { // limpa os campos do formulário
    this.formulario.reset();
  }


  /*--------------- VERIFICA SE O CAMPO E VÁLIDO P/ A MSG DE ERRO -----------------*/

  validade: boolean = false;

  nome: string = 'nome'; //strings feitas para o switch
  email: string = 'email';
  telefone: string = 'telefone';
  cep: string = 'endereco.cep'; //contem 'endereco.' pois está dentro do form group 'endereco'
  rua: string = 'endereco.rua';
  numero: string = 'endereco.numero';
  bairro: string = 'endereco.bairro';
  cidade: string = 'endereco.cidade';
  estado: string = 'endereco.estado';

  validaNome: boolean;
  validaEmail: boolean;
  validaTelefone: boolean;
  validaCep: boolean;
  validaRua: boolean;
  validaNumero: boolean;
  validaBairro: boolean;
  validaCidade: boolean;
  validaEstado: boolean;


  aplicaCssErro(valor, formulario) {

    this.validade = this.formulario.get(valor).valid; //captura o campo de validade do campo

    switch (valor) { //pega a variavel vinda com o nome de valor
      case this.nome:
        this.validaNome = !this.validade;
        break; //se executar isso ele encerra o laço
      case this.email:
        this.validaEmail = !this.validade;
        break;
      case this.telefone:
        this.validaTelefone = !this.validade;
        break;
      case this.cep:
        this.validaCep = !this.validade;
        break;
      case this.rua:
        this.validaRua = !this.validade;
        break;
      case this.numero:
        this.validaNumero = !this.validade;
        break;
      case this.bairro:
        this.validaBairro = !this.validade;
        break;
      case this.cidade:
        this.validaCidade = !this.validade;
        break;
      case this.estado:
        this.validaEstado = !this.validade;
        break;
      default:
        break;
    }

  }

  /*------------- CONSULTA CEP ------------*/

  consultaCep() { // pega o CEP digitado após o foco sair do campo CEP e busca suas informações no site do viacep

    let cep = this.formulario.get('endereco.cep').value;
    cep = cep.replace(/\D/g, ''); // retira todos os espaços e caracteres especiais digitados pelo usuário

    if (cep != "") { // se a variável 'cep' não for vazia, faça:

        var validacep = /^[0-9]{8}$/; // aceita até 8 números de 0 a 9

        if(validacep.test(cep)) { // valida o formato do cep
          this.http.get(`https://viacep.com.br/ws/${cep}/json`) // Consulta o webservice viacep.com.br
          .subscribe(dados => this.populaDadosForm(dados)); // se inscreve na requisição http e recebe os valores através do argumento (dados)
        }

    }
  }


  populaDadosForm(dados) { // captura e altera os valores dos values do formulário
    this.formulario.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

}
