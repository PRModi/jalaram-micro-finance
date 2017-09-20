import { NgForm } from '@angular/forms';
import { CustomerService } from './../../services/customer.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    private customerService: CustomerService) {
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
    this.selectedCustomer = '';
  }

  selectCustomer(customer: Customer) {
    console.log(customer.name);
    this.selectedCustomer = customer.name;
    this.customers = [];
  }

  onSubmit(form: NgForm) {
    const date = new Date(form.value.date);
    console.log(date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear());
  }

}
