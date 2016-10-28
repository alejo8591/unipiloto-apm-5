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
	title: string = "los productos del Año";

    selected: Product;

    products: Product[] = PRODUCTS;

    onSelect(product: Product){
        this.selected = product;
    }
}

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Samsung galaxy 8",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    },
    {
        id: 2,
        name: "Samsung galaxy 10",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    },
    {
        id: 3,
        name: "Samsung galaxy 20",
        description: "telefono que explota",
        type: "smartphone",
        price: 1500000,
        quantity: 20
    }
];
