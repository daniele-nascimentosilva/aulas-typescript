type Customer = {
  name: string;
  age: number;
}
const customer = {
  name: 'Daniele',
  age: 42
}
function showCustomer(customer: Customer) {
    console.log(`Customer Name: ${customer.name}`);
    console.log(`Customer Age: ${customer.age}`);
  
}

showCustomer(customer)
