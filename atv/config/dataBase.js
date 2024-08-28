const {Sequelize} = require('sequelize')

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'usuario',
    password: 'senha',
    database: 'apinode',
    define: {
        timestamps: true,
        underscored: true
    }
}

const sequelize = new Sequelize('database', 'username','password',{
    host: 'localhost',
    dialect: 'postgres',
});