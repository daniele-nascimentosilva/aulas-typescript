function printClientId(id: number | string): void {
    console.log(`Client ID: ${id}`);
}

printClientId(12345);
printClientId("ABC123");

// exercício

function printOrderId(id: number | string): void {
    console.log(`Order ID: ${id}`);
}       
printOrderId(67890);
printOrderId("XYZ789");

let identificador: number | string;
identificador = 54321;
console.log(`Identificador numérico: ${identificador}`);

identificador = "LMN456";
console.log(`Identificador string: ${identificador}`);