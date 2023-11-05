const Seller = require('../models/Seller')

class SellerController{
    async editMyStore(req,res){
        var id = req.userToken.id
        var store = await Seller.findSellerById(id)
        if(store.length >0){
            var {name,description} = req.body
            try{
              var result = await Seller.alterInfo_store(id,{
                 name_store: name == undefined? store[0].name_store:name
                ,description_store: description == undefined? store[0].description_store:description
            })
            
            if(result > 0){
                res.status(200).json({msg:"Sucesso Ao Editar"})
            }else{
                
                res.status(400).json({msg:"Erro Ao Editar"})
            }
            }catch(erro){
                res.status(400).json({msg:"Erro Desconecido"})
            }
        }else{
            res.status(404).json({msg:"Loja Inexistente"})
        }
    }
    async sellerProfile(req,res){
      var id = req.userToken.id
      var seller = await Seller.infoSeller(id)
      if(seller.length > 0){
        res.status(200).json(seller[0])
      }else{
        res.status(404).json({msg:"Voce Não E Vendedor"})
      }
    }
    async setSeller(req,res){
        var id = req.userToken.id
        var name_store = req.userToken.fullname
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
                res.status(200).json({msg:"Parabens "+req.userToken.fullname+" Agora Voce Pode vender Produtos"})
            }
        } catch (error) {
            console.log(error)
        }
      
    }
}

module.exports = new SellerController