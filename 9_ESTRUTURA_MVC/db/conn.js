const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodemvc', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
    console.log('✅ Banco de dados conectado!')
} catch(err) {
    console.log(`❌ Erro ao conectar ao banco de dados: \n${err}`)
}

module.exports = sequelize