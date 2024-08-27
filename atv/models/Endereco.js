const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize('database', 'username','password',{
    host: 'localhost',
    dialect: 'postgres',
});

class Endereco extends Model {}

Endereco.init({
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Cep: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Logradouto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Complemento: {
        type: DataTypes.STRING,
    },
    Bairro: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Estado: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    MunicipioIBGE: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Endereco',
    tableName: 'enderecos',
    timestamps: true
});

module.exports = Endereco