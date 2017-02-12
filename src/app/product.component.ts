import { Component, Input } from '@angular/core';

@Component({
    selector: 'product-box',
    templateUrl: 'product.html'
})
export class ProductBox {
    @Input() description: string;
    @Input() attributes: Array<any>;

    constructor() {

    }
}
