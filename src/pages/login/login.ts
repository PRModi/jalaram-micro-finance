import { GooglePlus } from '@ionic-native/google-plus';
import { HomePage } from './../home/home';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authService: AuthService,
    public gPlus: GooglePlus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  onSignUp(form: NgForm) {
    console.log(form.value.email);
    this.authService.signUp(form.value.email, form.value.password)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onSignIn(form: NgForm) {
    this.authService.signIn(form.value.email, form.value.password)
      .then(data => {
        console.log(data);
        this.navCtrl.setRoot(HomePage);
      })
      .catch(error => {
        console.log(error);
      })
  }

  onSignOut() {
    this.authService.signOut();

  }



  loginWithGoogle() {
    this.gPlus.login({
      'webClientId': '537886879116-kad4jdlpvm6gdhvmsg2gf01vp6na9aom.apps.googleusercontent.com',
      'offline': true
    })
      .then(res => {
        console.log(res.idToken);
        var idToken = res.idToken;
        const googleCradential = firebase.auth.GoogleAuthProvider.credential(idToken, null);
        firebase.auth().signInWithCredential(googleCradential)
          .then(success => {
            console.log(success);
            this.navCtrl.setRoot(HomePage);
          })
          .catch(error => {
            console.log(error);
          });



        // firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
        //   .then(success => {
        //     console.log(success);
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   });

      })
      .catch(error => {
        console.log(error);
      });
  }
}
