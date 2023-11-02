const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')
const UserController = require('../controllers/UserController')
const ProductController = require('../controllers/ProductController')

router.get('/',HomeController.index)
//users routers
router.post('/user/login',UserController.loginUser)
router.post('/user',UserController.registerUser)

//product routers
router.get('/product/:id',ProductController.findProduct)
router.get('/product/search/:name',ProductController.searchProduct)
router.post('/product',ProductController.registerProduct)
router.put('/product/:id',ProductController.productUpdate)
router.delete('/product/:id',ProductController.productDestroy)

module.exports = router