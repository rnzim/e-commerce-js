const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')
const UserController = require('../controllers/UserController')
const ProductController = require('../controllers/ProductController')
const PurchaseController = require('../controllers/PurchaseController')
const SellerController = require('../controllers/SellerController')
const PaymentController = require('../controllers/PaymentController')
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
//procurar um produto pelo id
router.get('/product/:id',ProductController.findProduct)
//pesquisa de produtos
router.get('/product/search/:name',ProductController.searchProduct)
//cadastro de produtos se for vendedor
router.post('/product',AuthSeller,ProductController.registerProduct)
//ediçao de produtos
router.put('/product/:id',AuthSeller,ProductController.productUpdate)
//deleçao de produtos
router.delete('/product/:id',AuthSeller,ProductController.productDestroy)


//purcharses
/*
router.get('/purchase',PurchaseController.viewBuys)
router.get('/purchase/:idClient/:idProduct',PurchaseController.buy)
*/
//payments
router.get('/payment/:idProduct',AuthUser,PaymentController.createPayment)
//ver os pagamentos gerados pelo usuario
router.get('/payment',AuthUser,PaymentController.viewPayment)
//rota exclusiva do mercado pagp aqui ele vai noticar quando ouve um pagamento
router.post('/payment/very',AuthUser,PaymentController.verifyPayments)
//seller
//editar dados da loja
router.put('/seller',AuthSeller,SellerController.editMyStore)
//torna-se vendedor 
router.put('/seller/toturn',AuthUser,SellerController.setSeller)
//mostrar seu perfil pessoal de vendedor
router.get('/seller/me/profile',AuthUser,SellerController.sellerMyProfile)
//perfil publico a todos os usuarios da plataforma
router.get('/seller/:name',SellerController.sellerPublicProfile)
module.exports = router