import { Component, Input } from '@angular/core';

@Component({
    selector: 'seller-box',
    templateUrl: 'seller.html'
})
export class SellerBox {
    @Input() seller: any;
    
    constructor() {

    }
}