const { DataTypes } = require("sequelize");
let db = require('../db');

const User = db.define("users", {
    id:{
        type: DataTypes.INTEGER(11),
        primaryKey: true,            // 主键
        autoIncrement: true,         // 自动递增
    },
    name:{
        type:DataTypes.STRING(20),
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
    },
    active:{
        type:DataTypes.STRING, 
    }

},
{
    freezeTableName: true
}
)


module.exports = User