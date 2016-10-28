import { Component } from '@angular/core';

export class Product {
    id: number;
    name: string;
    description: string;
    type: string;
    price: number;
    quantity: number;
}

@Component({
  selector: 'my-app',
  template: '<h1>{{title}}</h1>' +
  '<br /> <h2>{{product.id}}</h2>' +
  '<br /> <h2>{{product.name}}</h2>' +
  '<br /> <h2>{{product.description}}</h2>' +
  '<br /> <h2>{{product.type}}</h2>' +
  '<br /> <h2>{{product.quantity}}</h2>'
})
export class AppComponent {
	title: string = "El producto del Año";

    product: Product = {
        id: 2,
        name: "Samsung galaxy 7",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20,
    };
}
