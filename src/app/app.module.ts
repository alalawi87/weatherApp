import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { DetialsPage } from '../pages/detials/detials';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ServiceProvider } from '../providers/service/service';
import { WeatherResultProvider } from '../providers/weather-result/weather-result';
@NgModule({
  declarations: [
    MyApp,
    HomePage,AboutPage,DetialsPage
  ],
  imports: [HttpModule,
    BrowserModule,  HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, AboutPage,DetialsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    WeatherResultProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
