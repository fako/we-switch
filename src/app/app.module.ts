import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { WeSwitchApp } from './app.component';
import { AdvertisementPage } from '../pages/advertisement/advertisement';
import { SellerBox } from './seller.component';

@NgModule({
    declarations: [
        WeSwitchApp,
        AdvertisementPage,
        SellerBox
    ],
    imports: [
        IonicModule.forRoot(WeSwitchApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        WeSwitchApp,
        AdvertisementPage,
        SellerBox
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
