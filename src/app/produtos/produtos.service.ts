
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  constructor() { }

  getProdutos() {
    return [
      {
        id: 0,
        nome: 'celular',
        preco: 5990.00,
        descricao: 'Com só pressionar de um botão, você terá fotos de alta qualidade e resolução, mesmo em movimento, graças à sua câmera de 13 Mpx.',
        image: '../../assets/images/produto01.jpg'
      },
      {
        id: 1,
        nome: 'monitor',
        preco: 1670.50,
        descricao: 'Desfrute de todas as qualidades deste monitor, complemente o seu espaço e visualize as suas imagens de uma forma diferente.',
        image: '../../assets/images/produto02.jpg'
      },
      {
        id: 2,
        nome: 'controle',
        preco: 142.30,
        descricao: 'O controle funciona com duas pilhas e possui as mesmas funções dos controles remotos que acompanham as TVs no momento da compra.',
        image: '../../assets/images/produto03.jpg'
      },
      {
        id: 3,
        nome: 'roteador',
        preco: 270.10,
        descricao: 'Esqueça os cabos e navegue na Internet de qualquer lugar do seu ambiente imediato com o seu roteador sem fio.',
        image: '../../assets/images/produto04.jpg'
      },
      {
        id: 4,
        nome: 'xícara',
        preco: 31.25,
        descricao: 'Xícara para café ou chá, é a escolha perfeita para você que quer tomar sua bebida quente ou gelada todos os dias.',
        image: '../../assets/images/produto05.jpg'
      },
      {
        id: 5,
        nome: 'farol',
        preco: 145.30,
        descricao: 'Farol super potente e de longo alcance, produzido com o fantástico Led Cree de altíssimo brilho.',
        image: '../../assets/images/produto06.jpg'
      }
    ];
  }

}
