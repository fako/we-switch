import { Component } from '@angular/core';
import { AdvertisementService } from '../../app/advertisement.service';

@Component({
    templateUrl: 'advertisement.html'
})
export class AdvertisementPage {

    advertisement: any = null;

    constructor() {

        this.advertisement = AdvertisementService.getAdvertisement();

    }
}
