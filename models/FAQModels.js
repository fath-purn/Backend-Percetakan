import {Sequelize} from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const User = db.define('faq',{
    nama: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();