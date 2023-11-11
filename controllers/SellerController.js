const Seller = require('../models/Seller')
const Products = require('../models/Product')
class SellerController{
    async editView(req,res){
        res.render('profile/edit.ejs',{user:req.session.user})
    }
    async editMyStore(req,res){
        var id = req.session.user.id
        var store = await Seller.findSellerById(id)
        if(store.length >0){
            var {name,description} = req.body
            try{
              var result = await Seller.alterInfo_store(id,{
                 name_store: name == undefined || name.length <= 0? store[0].name_store:name
                ,description_store: description == undefined || description.length <= 0? store[0].description_store:description
            })
            console.log('///')
            console.log(result)
            console.log(id)
            console.log(name+''+description)
            if(result > 0){
                res.redirect("/seller/me/profile/")
            }else{
                
                res.redirect("/seller/me/profile/")
            }
            }catch(erro){
                res.status(400).json({msg:"Erro Desconecido"})
            }
        }else{
            res.status(404).json({msg:"Loja Inexistente"})
        }
    }
    async sellerMyProfile(req,res){
      var id = req.session.user.id
    
   
      var seller = await Seller.infoSeller(id)
     
      var products = await Products.viewMyProducts(seller[0].id)

      if(seller.length > 0){
        res.render('profile/main.ejs',{seller:seller[0],products:products,user:req.session.user,seller})
      }else{
        res.status(404).json({msg:"Voce Não E Vendedor"})
      }
    }

   async sellerPublicProfile(req,res){
        var name = req.params.name
        try{
            var seller = await Seller.findSellerByNameStore(name)
            var products = await Products.viewMyProducts(seller[0].id)
            if(seller.length > 0){
                res.render('profile/publicProfile.ejs',{seller,products:products,user:req.session.user})
            }else{
                res.status(404).json({msg:"Esse Vendedor Não Existe"})
            }
        }catch(e){
            console.log(e)
            res.status(500).json({msg:"Erro Desconhecido"})
        }
    }
    
    async setSeller(req,res){
        var id = req.session.user.id
        var name_store = req.session.user.fullname
        try {
            var findSeller = await Seller.findSellerById(id)
            if(findSeller.length > 0){
                res.status(409).json({msg:"Voce Ja E Vendedor: "+name_store})
            }else{
                var seller = await Seller.setSeller(id)
                var newSeller = await Seller.createSeller({
                    id_user:id,
                    name_store:name_store
                })
                req.session.destroy()
                res.redirect('/')
            }
        } catch (error) {
            console.log(error)
        }
      
    }
}

module.exports = new SellerController