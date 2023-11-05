const Product = require('../models/Product')
class HomeController{
    async index(req,res){
        var product = await Product.previewProduct()
        
        if(product != undefined){
            res.status(200).send({product})
        }else{
            res.status(500)
        }
        
    }
    async teste(req,res){
        var id = req.userToken
        res.status(200).json({user:id})
    }
}

module.exports = new HomeController