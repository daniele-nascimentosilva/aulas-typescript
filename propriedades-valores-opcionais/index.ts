type CustomerPrincipal = {
    firstName: string;
    lastName: string;
    age?: number;
}

const newCustomer: CustomerPrincipal = {
    firstName: "Ana",
    lastName: "Silva"
}   

console.log(newCustomer);


function printName(firstName: string, lastName?: string) {
    console.log(`Olá ${firstName} ${lastName ?? ""}`);
}

printName("Carlos");
printName("Carlos", "Santos");