const {Sequelize} = require ("sequelize")


const sequelize = new Sequelize('datn', 'postgres', '26082001', {
  host: 'localhost',
  dialect: "postgres" 
});

module.exports = sequelize