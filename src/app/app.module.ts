import { AuthService } from './../services/auth.service';
import { LoginPage } from './../pages/login/login';
import { CustomerDetailsPage } from './../pages/customer-details/customer-details';
import { DailyCollectionPage } from './../pages/daily-collection/daily-collection';
import { CustomerService } from './../services/customer.service';
import { NewCustomerPage } from './../pages/new-customer/new-customer';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from "@ionic/storage";
import { GooglePlus } from "@ionic-native/google-plus";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    NewCustomerPage,
    DailyCollectionPage,
    CustomerDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    NewCustomerPage,
    DailyCollectionPage,
    CustomerDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CustomerService,
    AuthService,
    GooglePlus

  ]
})
export class AppModule { }
