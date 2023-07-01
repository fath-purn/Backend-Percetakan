import {Sequelize} from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const Layanan = db.define('layanan',{
    nama: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default Layanan;

(async()=>{
    await db.sync();
})();