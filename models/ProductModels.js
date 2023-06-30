import {Sequelize} from "sequelize";
import dbProduct from '../config/dbProduct.js';

const {DataTypes} = Sequelize;

const Product = dbProduct.define('product', {
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
    await dbProduct.sync();
}) ();