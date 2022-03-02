const products = {}
const model = require('../models/products')
const response = require('../helpers/response')


products.getAllProducts = async (req, res) => {
    try {
        const result = await model.getAllProducts()
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error, true)
    }
}

products.getProductsById = async (req, res) => {
    try {
        const result = await model.getProductsById(req.params.id)
        return response(res, 200, result)
    } catch (error) {
        return response(res, 500, error, true)
    }
}

products.addDataProduct = async (req, res) => {
    try {
        const object = await (req.body)
        const data = {
            title: object.title,
            price: object.price,
        }
        const result = await model.addDataProduct(data)
        return response(res, 201, result, true)
    } catch (error) {
        console.log(error)
        return response(res, 500, error)
    }
}

products.updateDataProduct = async (req, res) => {
    try {
        const object = await (req.body)
        const data = {
            title: object.title,
            price: object.price,
        }
        const result = await model.updateDataProduct(data)
        return response(res, 201, result)
    } catch (error) {
        return response(res, 500, error, true)
    }
}

products.removeDataProduct = async (req, res) => {
    try {
        const result = await model.removeDataProduct(req.params.id)
        return response(res, 200, result)
    } catch (error) {
        Logger.error(error)
        return response(res, 500, error, true)
    }
}

module.exports = products