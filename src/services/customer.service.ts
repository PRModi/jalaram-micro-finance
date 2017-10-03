import { AuthService } from './auth.service';
import { Customer } from './../models/customer.model';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomerService {
    constructor(public http: Http,
        private authService: AuthService) { }

    private customers: Customer[] = [
        new Customer('Parth', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card', '20000'),
        new Customer('Suyog', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card', '20000'),
        new Customer('Dhrudeep', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card', '20000'),
        new Customer('Sanjay', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card', '20000'),
        new Customer('Kunjal', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card', '20000'),
        new Customer('Satya', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card', '20000'),
        new Customer('Bhaumik', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card', '20000'),
        new Customer('Ankit', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card', '20000'),
        new Customer('Debashis', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card', '20000'),
        new Customer('Divyesh', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card', '20000'),
        new Customer('Sumit', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card', '20000'),
        new Customer('Dhruv', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card', '20000')
    ];

    addCustomer(customer: Customer, token: string) {
        this.customers.push(customer);
        const userId = this.authService.getActiveUser().uid;
        return this.http.put('https://jalaram-micro-finance.firebaseio.com/' + userId + 'customer-list.json?auth=' + token, this.customers)
            .map((response: Response) => {
                return response.json();
            });
    }

    getAllCstomers() {
        return this.customers.slice();
    }
}