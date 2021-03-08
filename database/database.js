const Sequelize = require("sequelize")

const connection = new Sequelize('guiaperguntas', 'root', 'admin123456', {
    host:"localhost",
    dialect: "mysql"
});

module.exports = connection;

