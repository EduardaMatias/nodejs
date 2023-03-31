const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fs = require("fs");

function fileSystem(arquivo) {
  fs.readFile(arquivo, "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}

readline.question(
  "Olá, tudo bem? Bem vindo ao nosso portal de textos\nO que gostaria de ler hoje\n(1) - A Importância da Tecnologia na Comunicação\n(2) - Os Benefícios da Inteligência Artificial na Saúde\n(3) - O Papel da Tecnologia na Educação do Futuro\n",
  (opcao) => {
    exibirTextoEscolhido(opcao);
    readline.close();
  }
);

function exibirTextoEscolhido(opcao) {
  switch (opcao) {
    case "1":
      fileSystem("texto1.txt");
      break;
    case "2":
      fileSystem("texto2.txt");
      break;
    case "3":
      fileSystem("texto3.txt");
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}
