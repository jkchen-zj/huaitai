const { DataTypes } = require("sequelize");
let db = require('../db');

const Essay = db.define("essay", {
    id:{
        type: DataTypes.INTEGER(11),
        primaryKey: true,            // 主键
        autoIncrement: true,         // 自动递增
    },
    title:{
        type:DataTypes.STRING(200),
    },
    uid:{
        type: DataTypes.INTEGER(11),
        defaultValue:1,
        allowNull:false
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    is_delete:{
        type:DataTypes.BOOLEAN,
        defaultValue:0
    },
    images:{
        type:DataTypes.STRING(500),
    }

},
{
    freezeTableName: true
}
)

module.exports = Essay