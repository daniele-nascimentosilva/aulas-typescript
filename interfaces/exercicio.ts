// use a palavra chave interface para declarar uma tipagem, defina as prooriedades id (number), name (string) e email (string). Crie um objeto seguindo a estrutura da interface user. Utilize console log para exibir cada propriedade do objeto.
// interface IUser {
//     id: number;
//     name: string;
//     email: string;
// }
// const user: IUser = {
//     id: 1,
//     name: "Lucas",
//     email: "lucas@email.com"
// }

// console.log(`ID: ${user.id}`);
// console.log(`Name: ${user.name}`);
// console.log(`Email: ${user.email}`);

// exercicio 2

interface User {
    name: string
    age: number
    gender?: string
}

function printUser({name, age, gender = "masculino"}: User) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Gender: ${gender}`);
}   

printUser({name: "Marcos", age: 30, gender: "masculino"});
printUser({name: "Ana", age: 25});


// criar uma interface user com as seguintes proproedades: name, age e gender (opcional). Em seguida, crie uma função que receba um objeto do tipo user com essa interface. Defina masculino como valor padrão para gender, caso não seja informado.  Exiba os valore no console.
