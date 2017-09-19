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
    public custService: CustomerService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCustomerPage');
  }

  onSubmit(form: NgForm) {
    console.log(form);

    const customer: Customer = new Customer(form.value.customerName, form.value.contactNumber, form.value.reference, form.value.collectionType, form.value.loanAmount, form.value.date, form.value.idProof);
    this.custService.addCustomer(customer);

  }

}
