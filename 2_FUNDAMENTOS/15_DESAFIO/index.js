import chalk from "chalk";
import inquirer from "inquirer";

const regex = /[0-9]/;

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual o seu nome? ",
    },
    {
      name: "idade",
      message: "Qual a sua idade? ",
    },
  ])
  .then((answers) => {
    if (!answers.idade || !answers.nome) {
      throw new Error("Preencha todos os campos corretamente");
    }

    if (answers.idade.isNaN) {
      throw new Error("A idade digitada não é válida");
    }

    if (answers.nome.length < 3 || regex.test(answers.nome)) {
      throw new Error("O nome digitado não é válido");
    }
    
    console.log(
      chalk.bgYellow.black(
        `Olá ${answers.nome}, você tem ${answers.idade} anos de vida!`
      )
    );
  })
  .catch((err) => console.log(err));
