const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual a sua linguagem preferida? ", (language) => {
  console.log(`A linguagem preferida desse usuário é ${language}`);
  readline.close();
});
