import { Component, Input } from '@angular/core';
import lodash from "lodash";

@Component({
    selector: 'product-box',
    templateUrl: 'product.html'
})
export class ProductBox {

    _attributes: Array<any>;

    @Input() description: string;
    @Input()
    set attributes(attributesInput: Array<any>) {

        // Simplifying and chunking the attributes to work easily in the template
        let simpleAttributes = lodash.forEach(attributesInput, function(attribute){
            attribute.selected_values = attribute.selected_values.join(', ');
        });
        this._attributes = lodash.chunk(simpleAttributes, 2);

    }
    get attributes(): Array<any> { return this._attributes; }

    constructor() {

    }
}
