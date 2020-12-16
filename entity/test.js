const { DataTypes } = require("sequelize");
var db = require('../db');


const sss = db.define("sss", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green'
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER
});
(async () => {
  await db.sync({ force: true });
  // 这里是代码
})();

module.exports = sss;