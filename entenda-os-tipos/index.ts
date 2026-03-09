function sendMessage(userName: string, isLogged: boolean) {
  console.log(`Olá ${userName}. Você${isLogged ? "não" : ""} está logado.`);
}

const userName = "Daniele"
const isLogged = true;

sendMessage(userName, isLogged);
