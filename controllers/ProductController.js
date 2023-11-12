const Product = require('../models/Product')
const Seller = require('../models/Seller')
class ProductController{

    async viewProduct(req,res){
        var id = req.params.id
        try {
            var product = await Product.findByIdProduct(id)
            console.log(product)
            res.render('products/main.ejs',{product:product[0],user:req.session.user})
        } catch (error) {
            console.log(error)
        }
    }
    async newProduct(req,res){
        res.render('products/newProduct.ejs',{user:req.session.user})
    }
    async registerProduct(req,res){
        var id = req.session.user.id
        var isSeller = req.session.user.seller
        var img_name = req.file == undefined? "productIcon.png": req.file.filename
        if(isSeller == 1){
            var findSeller = await Seller.findSellerById(id)
            // Obtém a data e hora atuais
            let dataAtual = new Date();

            // Formata a data e hora para o formato do MySQL (YYYY-MM-DD HH:mm:ss)
            let dataFormatada = dataAtual.toISOString().slice(0, 19).replace("T", " ");

            console.log(dataFormatada);

            var{
                name_product,
                description_product,
                amount,
                pricing} = req.body
            try {
                await Product.createProduct({
                    name_product,
                    description_product,
                    id_seller:findSeller[0].id,
                    amount,
                    published:dataFormatada,
                    pricing,
                    img:img_name
                    
                }) 
                res.redirect('/seller/me/profile')
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
    async productUpdatePage(req,res){
        var id = req.params.id
        var findProduct = await Product.findByIdProduct(id)
        res.render('products/edit.ejs',{user:req.session.user,product:findProduct[0]})
    }
    async productUpdate(req,res){
        var id = req.params.id
        var pi = await Product.findByIdProduct(id)
        var img_name = req.file == undefined? pi[0].img: req.file.filename
        
        var {
            name,
            desc,
            amount,
            pricing
        } = req.body
        
        try {
            var result = await Product.editProduct(id, name, desc, amount, pricing,img_name);
            console.log(result);
            res.redirect('/seller/me/profile')
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
        
                    res.redirect('/seller/me/profile')
                
            } catch (error) {
                res.redirect('/seller/me/profile')
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
        res.render('search/main.ejs',{product:result,user:req.session.user})
       } catch (error) {
        console.log(error)
        console.log(error)
       }
    }
}
module.exports = new ProductController