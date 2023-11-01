const Product = require('../models/Product')
class HomeController{
    async index(req,res){
        var product = await Product.view()
        if(product != undefined){
            res.status(200).send({product})
        }else{
            res.status(500)
        }
        
    }
}

module.exports = new HomeController