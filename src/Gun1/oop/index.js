class Customer{
    constructor(id,customerNumber){
        this.id = id;
        this.customerNumber = customerNumber;

    }
}

let customer = new Customer(1,"12345");
//prototyping : Bir nesneye başka bir özellik eklemek
customer.name = "Murat Kurtboğan"
console.log(customer.name)

Customer.bisey = "Bişey"
console.log(customer.bisey)

console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(firstName,id, customerNumber){
        super(id,customerNumber)
        this.firstName = firstName;
    }

}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName;
    }

}