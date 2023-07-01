import {Sequelize} from "sequelize";
import db from '../config/db.js';

const {DataTypes} = Sequelize;

const Product = db.define('product', {
    nama: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    kategori: DataTypes.STRING,
    ulasan: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
});

export default Product;

(async() =>{
    await db.sync();
}) ();