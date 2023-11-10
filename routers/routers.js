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


//upload de image
const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({destination:(req,file,cb)=>{
    cb(null,"public/images/profiles")
    },
    filename:(req,file,cb)=>{
        var name_file = "profile"+Date.now()+path.extname(file.originalname)
        req.name_file = name_file
        cb(null,name_file)
       
    }   

})   

const upload = multer({storage})


//rotas


router.get('/',HomeController.index)
 //teste

//users routers
router.post('/login',UserController.loginUserSession)

router.get('/login',UserController.login)

router.get('/user',UserController.viewUser)
// api =>router.post('/login',UserController.loginUser)
router.post('/user',UserController.registerUser)
router.post('/upload',upload.single("imagem"),AuthUser,UploadController.uploadPhoto)

//product routers
router.get('/page/product/:id',ProductController.viewProduct)
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
router.get('/payment/:idProduct',UserSession,PaymentController.createPayment)
//ver os pagamentos gerados pelo usuario
router.get('/my/buy',UserSession,PaymentController.viewPayment)
//rota exclusiva do mercado pagp aqui ele vai noticar quando ouve um pagamento
router.post('/payment/very',PaymentController.verifyPayments)
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