export class Customer {
    constructor(
        public name: string,
        public contactNumber: string,
        public reference: string,
        public collectionType: string,
        public loanAmount: string,
        public date: string,
        public idProof: string,
        public amountDue : string
    ) { }
}