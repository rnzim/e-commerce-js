const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')
const UserController = require('../controllers/UserController')
const ProductController = require('../controllers/ProductController')
const PurchaseController = require('../controllers/PurchaseController')
const SellerController = require('../controllers/SellerController')
const AuthSeller = require('../middleware/AuthSeller')
const AuthUser = require('../middleware/AuthUser')
router.get('/',HomeController.index)
 //teste
 router.get('/test',AuthUser,HomeController.teste)
//users routers
router.get('/user',UserController.viewUser)
router.post('/login',UserController.loginUser)
router.post('/user',UserController.registerUser)

//product routers
router.get('/product/:id',ProductController.findProduct)
router.get('/product/search/:name',ProductController.searchProduct)
router.post('/product',AuthSeller,ProductController.registerProduct)
router.put('/product/:id',AuthSeller,ProductController.productUpdate)
router.delete('/product/:id',AuthSeller,ProductController.productDestroy)
//purcharses
router.get('/purchase',PurchaseController.viewBuys)
router.get('/purchase/:idClient/:idProduct',PurchaseController.buy)

//seller
router.post('/seller',AuthSeller,SellerController.editMyStore)
router.put('/seller',AuthUser,SellerController.setSeller)
router.get('/seller/me/profile',AuthUser,SellerController.sellerProfile)
module.exports = router