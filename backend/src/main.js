const express = require("express")
const router = express.Router()
const products = require("../routes/index")

router.use("/products", products)

router.use("*", (req, res) => {
    res.status(404).json("Endpoint Wrong!!")
})

module.exports = router