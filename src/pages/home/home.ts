import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { GooglePlus } from "@ionic-native/google-plus";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public gPlus: GooglePlus,
    public alertCtrl: AlertController) {

  }


  logOut() {
    const alert = this.alertCtrl.create({
      title: 'Do you want to Logout?',
      message: 'You will be logout from your account! Please Confirm.',
      buttons: [
        {
          text: 'cancel',
          role: 'destructive'
        },
        {
          text: 'Ok',
          handler: () => {
            this.gPlus.logout();
            this.navCtrl.setRoot(LoginPage);
          }
        }]
    });

    alert.present();

  }


}
