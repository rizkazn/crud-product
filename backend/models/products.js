const { DataTypes, Op } = require("sequelize")
const db  = require("../configs/db")

class Products {   
    constructor() {
        this.table = db.define("products", {
            id: {
                type : DataTypes.INTEGER,
                allowNull : false,
                autoIncrement : true,
                primaryKey : true
            },
            title: {
                type : DataTypes.STRING,
                allowNull : false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        })
    }

    getAllProducts() {
        return new Promise((resolve, reject) => {
            this.table.findAll({
                order: [["updatedAt", "DESC"]],
            })
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }

    getProductsById(id) {
        return new Promise((resolve, reject) => {
            this.table.findAll({
                order: [["id", "DESC"]],
                where: {
                    id,
                },
            })
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }

    addDataProduct(data) {
        return new Promise((resolve, reject) => {
            this.table.create(data)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        })
    }

    updateDataProduct(data) {
        return new Promise((resolve, reject) => {
            this.table.update({
                title: data.title,
                price: data.price,
            }, {
                where: {
                    id : data.id,
                }
            })
            .then((res) => {
                resolve("Update Data Product Success")
            })
            .catch((err) => {
                reject(err)
            })
        })
    }

    removeDataProduct(id) {
        return new Promise((resolve,reject) => {
            this.table.destroy({
                where: {
                    id : id,
                }
            })
            .then((res) => {
                resolve("Delete Data Product Success")
            })
            .catch((err) => {
                reject(err)
            })
        })
    }

}

module.exports = new Products()