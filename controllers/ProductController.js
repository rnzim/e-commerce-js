const Product = require('../models/Product')
const Seller = require('../models/Seller')
class ProductController{
    async registerProduct(req,res){
        var id = req.userToken.id
        var isSeller = req.userToken.seller
        if(isSeller == 1){
            var findSeller = await Seller.findSellerById(id)
            
            var{
                name_product,
                description_product,
                amount,
                published,
                pricing} = req.body
            try {
                await Product.createProduct({
                    name_product,
                    description_product,
                    id_seller:findSeller[0].id,
                    amount,
                    published,
                    pricing
                }) 
                res.status(200).send('OK')
            } catch (error) {
                res.status(500)
            }
        }
        
    }
    async findProduct(req,res){
       var id = req.params.id
       try {
         var result = await Product.findByIdProduct(id)
         res.status(200).json(result)
       } catch (error) {
         return []
         
       }
      
    } 
    async productUpdate(req,res){
        var id = req.params.id
        var {

            name,desc,amount,pricing

        } = req.body
        try {
            var result = await Product.editProduct(id, name, desc, amount, pricing);
            console.log(result);
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: false, err: 'An error occurred while updating the product' });
        }
        
    }
    async productDestroy(req,res){
        var id = req.params.id
        var product = await Product.findByIdProduct(id)
        if(product.length > 0){
            try {
                var result = await Product.deleteProduct(id)
                if(result.status == true){
                    res.status(200).send('Ok')
                }
            } catch (error) {
                console.log(error)
                res.status(500)
            }
        }else{
            res.status(404).send('Product Not Found')
        }   
    }
    async searchProduct(req,res){
       var name = req.params.name
       try {
        var result = await Product.seachProductByName(name)
        res.status(200).json(result)
       } catch (error) {
        console.log(error)
        res.status(500)
       }
    }
}
module.exports = new ProductController