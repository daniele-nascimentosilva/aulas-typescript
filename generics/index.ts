// criar uma função genérico do tipo T, iterar sobre os elementos de um array, exibir os itens no console. Testar a função com arrays de números e strings.
function makeArrayGeneric<T>(items: T[]): T[] {
    items.forEach((item) => {
        console.log(item);
    });

    return items;   
}

const stringArray = makeArrayGeneric<string>(["maçã", "banana", "laranja"]);
const numberArray = makeArrayGeneric<number>([1, 2, 3, 4, 5]);
console.log(stringArray);
console.log(numberArray);
