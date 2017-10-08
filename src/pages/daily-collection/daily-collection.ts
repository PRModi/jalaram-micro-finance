import { AuthService } from './../../services/auth.service';
import { NgForm } from '@angular/forms';
import { CustomerService } from './../../services/customer.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { Customer } from '../../models/customer.model';

@IonicPage()
@Component({
  selector: 'page-daily-collection',
  templateUrl: 'daily-collection.html',
})
export class DailyCollectionPage {
  customers: Customer[] = [];
  date: string = new Date().toISOString();
  selectedCustomer: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private customerService: CustomerService,
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyCollectionPage');
  }

  initializeItems() {
    this.customers = this.customerService.getAllCstomers();
  }

  filterCustomer(event: any) {
    this.initializeItems();
    console.log(event.target.value);
    const value = event.target.value;

    if (value && value.trim() != '') {
      this.customers = this.customers.filter((customer) => {
        return (customer.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
      });
    }

    else {
      this.customers = [];
    }
    this.selectedCustomer = '';
  }

  selectCustomer(customer: Customer) {
    console.log(customer.name);
    this.selectedCustomer = customer.name;
    this.customers = [];
  }

  onSubmit(form: NgForm) {

    const alert = this.alertCtrl.create({
      title: 'Sure to update?',
      subTitle: 'Are you sure you want to update the collection details of customer?',
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

            const date = new Date(form.value.date);
            console.log(date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear());
            console.log(form);

            this.customers = this.customerService.getAllCstomers();


            for (var i = 0; i < this.customers.length; i++) {
              if (this.customers[i].name == form.value.customerName) {
                console.log(this.customers[i]);
                let cust = this.customers[i];
                console.log("cust value");
                this.customers = [];
                this.updateDetails(i, cust, form, loader);
              }
            }

          }
        }
      ]
    });
    alert.present();



  }

  updateDetails(index: number, cust: Customer, form: NgForm, loader: any) {

    if (cust != null) {
      console.log("inside if cond");
      let val: any = parseInt(cust.amountDue) - parseInt(form.value.amountGiven);
      cust.amountDue = val;
      console.log("updated value");
      console.log(cust);

      this.authService.getActiveUser().getIdToken()
        .then((token: string) => {
          this.customerService.updateCustomer(index, cust, token)
            .subscribe(() => {
              console.log("customer updated");
              loader.dismiss();
              this.toastCtrl.create({
                message: 'Details updated successfully!',
                duration: 2000
              }).present();
            },
            error => { console.log("updation error") })

        })
        .catch();

      console.log(cust);
    }

  }

}
