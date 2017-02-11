import { Component } from '@angular/core';
import { AdvertisementService } from '../../app/advertisement.service';
import { SellerBox } from '../../app/seller.component'

@Component({
    templateUrl: 'advertisement.html',
    entryComponents: [SellerBox]
})
export class AdvertisementPage {

    advertisement: any = null;

    constructor() {

        this.advertisement = AdvertisementService.getAdvertisement();

    }
}
