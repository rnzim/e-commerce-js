const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')
const UserController = require('../controllers/UserController')
const ProductController = require('../controllers/ProductController')
const PurchaseController = require('../controllers/PurchaseController')
const SellerController = require('../controllers/SellerController')
const PaymentController = require('../controllers/PaymentController')
const UploadController = require('../controllers/UploadController')
const AuthSeller = require('../middleware/AuthSeller')
const AuthUser = require('../middleware/AuthUser')
const UserSession = require('../middleware/AuthUserSession')
const upload = require('../middleware/Upload')


//rotas


router.get('/',HomeController.index)
 //teste

//users routers
router.post('/login',UserController.loginUserSession)

router.get('/login',UserController.login)

router.get('/user',UserController.viewUser)
router.get('/me/profile',UserSession,UserController.meProfile)
// api =>router.post('/login',UserController.loginUser)
router.post('/user',UserController.registerUser)
router.post('/upload',upload.single("imagem"),AuthUser,UploadController.uploadPhoto)

//product routers
//
router.get('/new/product',UserSession,ProductController.newProduct)
router.get('/page/product/:id',ProductController.viewProduct)
//procurar um produto pelo id
//upload images
router.get('/product/:id',ProductController.findProduct)
//pesquisa de produtos
router.get('/product/search/:name',ProductController.searchProduct)
//cadastro de produtos se for vendedor
router.post('/product',UserSession,upload.single('imagem'),ProductController.registerProduct)
//ediçao de produtos
router.get('/product/edit/:id',UserSession,ProductController.productUpdatePage)
router.post('/product/edit/save/:id',UserSession,upload.single('imagem'),ProductController.productUpdate)
//deleçao de produtos
router.get('/destroy/:id',UserSession,ProductController.productDestroy)


//purcharses
/*
router.get('/purchase',PurchaseController.viewBuys)
router.get('/purchase/:idClient/:idProduct',PurchaseController.buy)
*/
//payments
router.get('/payment/:idProduct',UserSession,PaymentController.createPayment)
//ver os pagamentos gerados pelo usuario
router.get('/my/buy',UserSession,PaymentController.viewPayment)
//rota exclusiva do mercado pagp aqui ele vai noticar quando ouve um pagamento
router.post('/payment/very',PaymentController.verifyPayments)
//seller
//editar dados da loja
router.get('/seller/me/profile/edit',UserSession,SellerController.editView)
router.post('/seller/me/profile/edit/save',UserSession,SellerController.editMyStore)
//torna-se vendedor 
router.get('/seller/toturn',UserSession,SellerController.setSeller)
//mostrar seu perfil pessoal de vendedor
router.get('/seller/me/profile',UserSession,SellerController.sellerMyProfile)
//perfil publico a todos os usuarios da plataforma
router.get('/seller/:name',SellerController.sellerPublicProfile)
module.exports = router