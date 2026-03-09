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
function printUser(_a) {
    var name = _a.name, age = _a.age, _b = _a.gender, gender = _b === void 0 ? "masculino" : _b;
    console.log("Name: ".concat(name));
    console.log("Age: ".concat(age));
    console.log("Gender: ".concat(gender));
}
printUser({ name: "Marcos", age: 30, gender: "masculino" });
printUser({ name: "Ana", age: 25 });
// criar uma interface user com as seguintes proproedades: name, age e gender (opcional). Em seguida, crie uma função que receba um objeto do tipo user com essa interface. Defina masculino como valor padrão para gender, caso não seja informado.  Exiba os valore no console.
