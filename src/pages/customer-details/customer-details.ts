import { CustomerService } from './../../services/customer.service';
import { Customer } from './../../models/customer.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-customer-details',
  templateUrl: 'customer-details.html',
})
export class CustomerDetailsPage {
  customers: Customer[] = [];
  isSearchTap: boolean = false;
  selectedCustomer: Customer;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public customerService: CustomerService) {
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
  }

  selectCustomer(customer: Customer) {
    console.log(customer.name);
    this.selectedCustomer = customer;
    this.customers = [];
  }

}
