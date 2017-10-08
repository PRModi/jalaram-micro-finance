export class Customer {
    constructor(
        public name: string,
        public contactNumber: string,
        public reference: string,
        public collectionType: string,
        public loanAmount: string,
        public date: Date,
        public idProof: string,
        public amountDue : string
    ) { }
}