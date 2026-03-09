
interface ICustomer {
    name: string;
    age: number;
}

interface IAddress {
    street: string
}

interface ICustomerProfile extends ICustomer, IAddress {}

const newProfile: ICustomerProfile = {
    name: "Mariana",
    age: 28,
    street: "Rua das Flores, 123"
}


type TCustomer = {
    name: string;
    age: number;
}

type TAddress = {
    street: string
}

type TCustomerProfile = TCustomer & TAddress;
const anotherProfile: TCustomerProfile = {
    name: "João",
    age: 35,
    street: "Avenida Central, 456"
}