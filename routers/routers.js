const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')
const UserController = require('../controllers/UserController')
const ProductController = require('../controllers/ProductController')
const PurchaseController = require('../controllers/PurchaseController')
const AuthSeller = require('../middleware/AuthSeller')
const AuthUser = require('../middleware/AuthUser')
router.get('/',HomeController.index)
//users routers
router.post('/login',UserController.loginUser)
router.post('/user',UserController.registerUser)

//product routers
router.get('/product/:id',ProductController.findProduct)
router.get('/product/search/:name',ProductController.searchProduct)
router.post('/product',AuthSeller,ProductController.registerProduct)
router.put('/product/:id',AuthSeller,ProductController.productUpdate)
router.delete('/product/:id',AuthSeller,ProductController.productDestroy)
//purcharses
router.post('/purchase',PurchaseController.viewBuys)
router.get('/purchase/:idClient/:idProduct',PurchaseController.buy)
module.exports = router