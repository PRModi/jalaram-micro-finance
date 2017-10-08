import { AuthService } from './auth.service';
import { Customer } from './../models/customer.model';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { Injectable } from '@angular/core';


@Injectable()
export class CustomerService {

    public customers: Customer[];

    constructor(
        public http: Http,
        private authService: AuthService
    ) {
        this.customers = [];
    }

    fetchCustListFromServer(token: string) {
        const userId = this.authService.getActiveUser().uid;

        return this.http.get('https://jalaram-finance.firebaseio.com/' + userId + 'customer-list.json?auth=' + token)
            .map((response: Response) => {
                return response.json();
            })
            .do((data) => {
                this.customers = data;
            })
    }

    addCustomer(customer: Customer, token: string) {
        console.log(this.customers);
        this.customers = this.customers || [];
        this.customers.push(customer);
        const userId = this.authService.getActiveUser().uid;
        return this.http.put('https://jalaram-finance.firebaseio.com/' + userId + 'customer-list.json?auth=' + token, this.customers)
            .map((response: Response) => {
                return response.json();
            });
    }

    updateCustomer(index: number, customer: Customer, token: string) {
        const userId = this.authService.getActiveUser().uid;
        this.customers[index] = customer;
        console.log("updated list");
        console.log(this.customers);
        return this.http.put('https://jalaram-finance.firebaseio.com/' + userId + 'customer-list.json/?auth=' + token, this.customers)
            .map((response: Response) => {
                return response.json();
            })

    }

    getAllCstomers() {
        return this.customers.slice();
    }
}