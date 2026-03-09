// function makeArray<T>(item: T): T[] {
//     return [item];
// }
// const numbers = makeArray(5);
// console.log(numbers);
// criar uma função genérico do tipo T, iterar sobre os elementos de um array, exibir os itens no console. Testar a função com arrays de números e strings.
function makeArrayGeneric(items) {
    items.forEach(function (item) {
        console.log(item);
    });
    return items;
}
var stringArray = makeArrayGeneric(["maçã", "banana", "laranja"]);
var numberArray = makeArrayGeneric([1, 2, 3, 4, 5]);
console.log(stringArray);
console.log(numberArray);
