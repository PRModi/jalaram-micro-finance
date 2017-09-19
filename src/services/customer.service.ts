import { Customer } from './../models/customer.model';
export class CustomerService {

    private customers: Customer[] = [];

    addCustomer(customer: Customer) {
        this.customers.push(customer);
        console.log(this.customers);
    }
}