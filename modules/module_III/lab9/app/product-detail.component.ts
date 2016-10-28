import { Component, Input } from '@angular/core';
import { Product } from './product';

@Component({
    selector: 'product-detail',
    templateUrl: 'app/templates/product-detail.html'
})

export class ProductDetailComponent {
    @Input()
    product: Product;
}

