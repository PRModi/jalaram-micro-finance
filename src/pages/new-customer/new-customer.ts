import { AuthService } from './../../services/auth.service';
import { Customer } from './../../models/customer.model';
import { CustomerService } from './../../services/customer.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    private authService: AuthService) {

      const date = new Date();
      console.log(date);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCustomerPage');
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value.date);
    const date: Date = new Date();
    console.log(date);
    const customer: Customer = new Customer(form.value.name, form.value.contactNumber, form.value.reference, form.value.collectionType, form.value.loanAmount, date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear(), form.value.idProof, form.value.loanAmount);

    this.authService.getActiveUser().getToken()
      .then((token: string) => {
        this.custService.addCustomer(customer, token)
          .subscribe(
          (data) => { console.log(data) },
          (error) => { console.log(error) })
      });

  }

}
