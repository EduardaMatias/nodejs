import inquirer from "inquirer";
import chalk from "chalk";

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual a primeira nota? ",
    },
    {
      name: "p2",
      message: "Qual a segunda nota? ",
    },
  ])
  .then((answers) => calculaMedia(answers.p1, answers.p2))
  .catch((err) => console.log(err));

const calculaMedia = (p1, p2) => {
  const media = (parseFloat(p1) + parseFloat(p2)) / 2;

  console.log(`A média foi ${media}`);

  if (media >= 7) {
    console.log(chalk.green.bold("Parabéns, você foi aprovado!"));
  } else {
    console.log(chalk.red.bold("Infelizmente você foi reprovado!"));
  }
};
