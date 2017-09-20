import { Customer } from './../models/customer.model';
export class CustomerService {

    private customers: Customer[] = [
        new Customer('Parth', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card','20000'),
        new Customer('Suyog', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card','20000'),
        new Customer('Dhrudeep', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card','20000'),
        new Customer('Sanjay', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card','20000'),
        new Customer('Kunjal', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card','20000'),
        new Customer('Satya', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card','20000'),
        new Customer('Bhaumik', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card','20000'),
        new Customer('Ankit', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card','20000'),
        new Customer('Debashis', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card','20000'),
        new Customer('Divyesh', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card','20000'),
        new Customer('Sumit', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card','20000'),
        new Customer('Dhruv', '9033511367', 'Dhrudeep', 'Weekly', '20000', new Date().toISOString(), 'Aadhar Card','20000')
    ];

    addCustomer(customer: Customer) {
        this.customers.push(customer);
        console.log(this.customers);
    }

    getAllCstomers() {
        return this.customers.slice();
    }
}