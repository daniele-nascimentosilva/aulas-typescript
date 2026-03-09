//criar um enum, definir valores fixos dentro de um enum, utilizar uma variável para armazenar um valor do enum e exibir esse valor no console.
enum Colors {
    RED = "Red Color",
    GREEN = "Green Color",
    BLUE = "Blue Color"
}
let myColor: Colors = Colors.GREEN;
console.log(myColor);

// mais um explo com enum
enum Directions {
    NORTH = "North",
    SOUTH = "South",
    EAST = "East",
    WEST = "West"
}
function move(direction: Directions) {
    console.log(`Moving towards: ${direction}`);
}
move(Directions.EAST);

//crie um enum com os valores Pendente, Pago e Enviado. Crie uma variável tipada como StatusPedido e atribua um dos valores do Enum. Use console.log para imprimir o valor no console.
enum StatusPedido {
    PENDENTE = "Pendente",  
    PAGO = "Pago",
    ENVIADO = "Enviado"
}

let meuPedido: StatusPedido = StatusPedido.PAGO;
console.log(`O status do meu pedido é: ${meuPedido}`);
