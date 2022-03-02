const { Sequelize } = require("sequelize")

const db = new Sequelize('products', 'rizkazn', '151515', {
    host : "localhost",
    dialect : "postgres",
    logging : false
})

module.exports = db
