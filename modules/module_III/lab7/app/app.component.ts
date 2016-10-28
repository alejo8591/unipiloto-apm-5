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
  templateUrl: 'app/templates/product-detail.html'
})
export class AppComponent {
	title: string = "El producto del Año";

    product: Product = {
        id: 2,
        name: "Samsung galaxy 7",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    };
}
