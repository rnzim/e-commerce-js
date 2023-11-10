const Product = require('../models/Product')
class HomeController{
    async index(req,res){
        var product = await Product.viewProduct()  
        console.log(product)
        console.log(req.session.user)
        res.render('index',{product,user:req.session.user})
        
    }
    
}

module.exports = new HomeController