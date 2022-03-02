const express = require("express")
const controller = require('../controllers/products')
const router = express.Router()

router.get("/", controller.getAllProducts)
router.get('/:id', controller.getProductsById);
router.post("/add", controller.addDataProduct)
router.put('/update', controller.updateDataProduct)
router.delete('/remove/:id', controller.removeDataProduct)

module.exports = router