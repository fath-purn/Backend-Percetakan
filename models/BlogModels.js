import {Sequelize} from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const Blog = db.define('blog',{
    nama: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
},{
    freezeTableName:true
});

export default Blog;

(async()=>{
    await db.sync();
})();