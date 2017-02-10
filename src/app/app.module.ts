import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { WeSwitchApp } from './app.component';
import { AdvertisementPage } from '../pages/advertisement/advertisement';

@NgModule({
  declarations: [
    WeSwitchApp,
    AdvertisementPage
  ],
  imports: [
    IonicModule.forRoot(WeSwitchApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    WeSwitchApp,
    AdvertisementPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
