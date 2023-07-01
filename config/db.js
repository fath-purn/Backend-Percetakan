import {Sequelize} from "sequelize";

const dbProduk = new Sequelize('percetakan', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default dbProduk;