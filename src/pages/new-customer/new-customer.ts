import { AuthService } from './../../services/auth.service';
import { Customer } from './../../models/customer.model';
import { CustomerService } from './../../services/customer.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-new-customer',
  templateUrl: 'new-customer.html',
})
export class NewCustomerPage {
  collectionType: string = "";
  loanAmount: string = "";
  idProof: string = "";
  date: string = new Date().toISOString();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public custService: CustomerService,
    private authService: AuthService,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController) {

    const date = new Date();
    console.log(date);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCustomerPage');
  }

  onSubmit(form: NgForm) {

    console.log(form);
    console.log(form.value.date);
    let date: Date = new Date(form.value.date);
    console.log(date);
    const customer: Customer = new Customer(form.value.name, form.value.contactNumber, form.value.reference, form.value.collectionType, form.value.loanAmount, date, form.value.idProof, form.value.loanAmount);
    console.log('added data');
    console.log(customer);

    const alert = this.alertCtrl.create({
      title: 'Sure to submit?',
      subTitle: 'Are you sure you want to submit the details?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          handler: () => {

            const loader = this.loadingCtrl.create({
              content: 'Please wait...'
            });
            loader.present();

            this.authService.getActiveUser().getToken()
              .then((token: string) => {
                this.custService.addCustomer(customer, token)
                  .subscribe(
                  (data) => {
                    console.log(data);
                    loader.dismiss();
                    this.toastCtrl.create({
                      message: 'Customer added Successfully!',
                      duration: 2000
                    }).present();
                  },
                  (error) => { console.log(error) })
              });

          }
        }
      ]
    });

    alert.present();

  }

}
