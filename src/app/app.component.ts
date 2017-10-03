import { HomePage } from './../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { CustomerDetailsPage } from './../pages/customer-details/customer-details';
import { DailyCollectionPage } from './../pages/daily-collection/daily-collection';
import { NewCustomerPage } from './../pages/new-customer/new-customer';
import { Component } from '@angular/core';
import { Platform, MenuController, AlertController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  homePage: any = HomePage;
  rootPage: any = LoginPage;
  custPage: any = NewCustomerPage;
  dailyCollectionPage: any = DailyCollectionPage;
  custDetailsPage: any = CustomerDetailsPage;



  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public menuCtrl: MenuController,
    public alertCtrl: AlertController
  ) {

    firebase.initializeApp({
      apiKey: "AIzaSyD_ikp2w6mg4OdpM-H6Al7CItQ7Zk1pX9g",
      authDomain: "jalaram-finance.firebaseapp.com",
      databaseURL: "https://jalaram-finance.firebaseio.com",
      projectId: "jalaram-finance",
      storageBucket: "jalaram-finance.appspot.com",
      messagingSenderId: "537886879116"
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

