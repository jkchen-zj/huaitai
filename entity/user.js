const { DataTypes } = require("sequelize");
let db = require('../db');

const User = db.define("users", {
    id:{
        type: Sequelize.INTEGER(11),
        primaryKey: true,            // 主键
        autoIncrement: true,         // 自动递增
    },
    name: DataTypes.TEXT,
})