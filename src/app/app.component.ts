import { DailyCollectionPage } from './../pages/daily-collection/daily-collection';
import { NewCustomerPage } from './../pages/new-customer/new-customer';
import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase'

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  custPage: any = NewCustomerPage;
  dailyCollectionPage: any = DailyCollectionPage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {

    firebase.initializeApp({

    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }

  openPage(page: any) {
    this.rootPage = page;
    this.menuCtrl.close();

  }
}

