var Sequelize=require("sequelize")

const mysqkconnection = new Sequelize('koa', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {   //连接池设置
    max: 5, //最大连接数
    min: 0, //最小连接数
    idle: 10000
  },
});

mysqkconnection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.log('Unable to connect to the database', err)
  })

// console.log("连接成功")
module.exports = mysqkconnection;