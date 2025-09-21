import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor() {}

  products2: Product[] = [
    {
      id: 1,
      title: 'Caja resma',
      description:
        'Paquete completo de resmas de papel para uso diario o impresión intensiva.',
      price: 250000,
      imageUrl: 'resma.webp',
    },
    {
      id: 2,
      title: 'Calculadoras casio',
      description:
        'Calculadora Casio de funciones básicas, ideal para clases o uso de oficina.',
      price: 38000,
      imageUrl: 'casio.png',
    },
    {
      id: 3,
      title: 'Rótulos adhesivos',
      description:
        'Hojas adhesivas para rotulación, ideal para señalización o identificación rápida.',
      price: 6500,
      imageUrl: 'adhesivo.jpg',
    },
    {
      id: 4,
      title: 'Bisturí grande',
      description:
        'Bisturí de tamaño grande, buena resistencia y corte preciso.',
      price: 1500,
      imageUrl: 'bisturi.webp',
    },
    {
      id: 5,
      title: 'Perforadoras',
      description:
        'Perforadora metálica para papeles, uso frecuente en oficina o escuela.',
      price: 15000,
      imageUrl: 'perforadora.jpg',
    },
    {
      id: 6,
      title: 'Cuaderno sencillo',
      description:
        'Cuaderno con tapa suave, hojas lineadas, ideal para apuntes diarios.',
      price: 9000,
      imageUrl: 'cuaderno.jpg',
    },
    {
      id: 7,
      title: 'Cuaderno cocido',
      description:
        'Cuaderno cosido, mayor resistencia, adecuado para uso continuo.',
      price: 7500,
      imageUrl: 'cocido.webp',
    },
    {
      id: 8,
      title: 'Mouse pads',
      description: 'Alfombrilla para ratón antideslizante, superficie suave.',
      price: 15500,
      imageUrl: 'mousepad.jpg',
    },
    {
      id: 9,
      title: 'Marcador borrable caja',
      description:
        'Caja con marcadores borrables para pizarras blancas, trazos limpios.',
      price: 30000,
      imageUrl: 'borrable.jpg',
    },
    {
      id: 10,
      title: 'Saca ganchos',
      description:
        'Herramienta para remover grapas o ganchos fácilmente sin dañar papel.',
      price: 4000,
      imageUrl: 'saca.webp',
    },
    {
      id: 11,
      title: 'Rollo cinta ancha',
      description:
        'Rollo de cinta adhesiva ancha, ideal para empaques o señalización.',
      price: 10000,
      imageUrl: 'cinta.jpg',
    },
  ];

  cart: Product[] = [];
}
