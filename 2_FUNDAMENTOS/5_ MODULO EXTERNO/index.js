const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

const nome = args['nome']
const profissao = args['profissao']

console.log(`O nome dele(a) é ${nome} e ele(a) é ${profissao}`)