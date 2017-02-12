import { Component, Input } from '@angular/core';

@Component({
    selector: 'product-box',
    templateUrl: 'product.html'
})
export class ProductBox {

    _attributes: Array<any>;

    @Input() description: string;
    @Input()
    set attributes(attributesInput: Array<any>) {

        let self = this;

        // Simplifying and chunking the attributes to work easily in the template
        this._attributes = [];
        attributesInput.forEach(function(attribute, index){

            attribute.selected_values = attribute.selected_values.join(', ');

            // Normally I'd use lodash.chunk for chunking an array,
            // but lodash and typescript don't like to play together on my machine :(
            if(index % 2) {
                self._attributes[self._attributes.length - 1].push(attribute);
            } else {
                self._attributes.push([attribute]);
            }

        });

    }
    get attributes(): Array<any> { return this._attributes; }

    constructor() {

    }
}
