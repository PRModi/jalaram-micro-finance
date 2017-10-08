import { AuthService } from './../../services/auth.service';
import { CustomerService } from './../../services/customer.service';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { GooglePlus } from "@ionic-native/google-plus";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public gPlus: GooglePlus,
    public alertCtrl: AlertController,
    public custService: CustomerService,
    public loadingCtrl: LoadingController,
    public authService: AuthService) {

    const loader = this.loadingCtrl.create(
      {
        content: 'Please wait...'
      }
    );
    loader.present();

    this.authService.getActiveUser().getIdToken()
      .then((token: string) => {
        this.custService.fetchCustListFromServer(token)
          .subscribe(
          () => {
            console.log('success');
            loader.dismiss();
          }
          ,
          (error) => console.log('error'))
      })
      .catch()



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
