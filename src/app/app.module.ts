import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Geolocation } from '@ionic-native/geolocation';
import { HttpClient } from '@angular/common/http';
import { MapsProvider } from '../providers/maps/maps';
import { CommonServie } from '../providers/util/common.servie';
import { LoaderProvider } from '../providers/loader/loader';
import { HomePageModule } from '../pages/home/home.module';
import { ChartPageModule } from '../pages/chart/chart.module'
import { TabsPageModule } from '../pages/tabs/tabs.module'
import { ContactPageModule } from '../pages/contact/contact.module'
import { AboutPageModule } from '../pages/about/about.module'
@NgModule({
  declarations: [
    MyApp,
    // ContactPage,
    // HomePage,
    // TabsPage,
    // ChartPage,
    // LocatePage,
  ],
  imports: [
    BrowserModule,
    // KakaoMapsModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HomePageModule ,
ChartPageModule ,
TabsPageModule ,
ContactPageModule,
AboutPageModule ,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // ContactPage,
    // HomePage,
    // TabsPage,
    // ChartPage,
    // LocatePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClient,
    Geolocation,
    MapsProvider,
    CommonServie,
    LoaderProvider,
  ]
})
export class AppModule {}
