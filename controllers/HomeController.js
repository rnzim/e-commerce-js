const Product = require('../models/Product')
class HomeController{
    async index(req,res){
        var product = await Product.viewProduct()  
        res.render('index',{product,user:req.session.user})
        
    }
    
}

module.exports = new HomeController