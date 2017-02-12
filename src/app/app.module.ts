import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { WeSwitchApp } from './app.component';
import { AdvertisementPage } from '../pages/advertisement/advertisement';
import { SellerBox } from './seller.component';
import { ProductBox } from './product.component';

@NgModule({
    declarations: [
        WeSwitchApp,
        AdvertisementPage,
        SellerBox,
        ProductBox
    ],
    imports: [
        IonicModule.forRoot(WeSwitchApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        WeSwitchApp,
        AdvertisementPage,
        SellerBox,
        ProductBox
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
