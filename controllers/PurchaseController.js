const Purchase = require('../models/UserPurchases')
const jwt = require('jsonwebtoken')

class PurchaseController{
  async buy(req,res){
     var idClient = req.params.idClient  
     var idProduct = req.params.idProduct
     var Payment = true
     if(Payment){
      var result = await Purchase.buyItem(idClient,idProduct)
      res.status(200).json({msg:"Comprar Realizada Com Sucesso"})
     }
     
  }
  async viewBuys(req,res){
    var token = req.body.token
    try{
      var compareToken = jwt.verify(token,"miznr")
      console.log(compareToken.id)
        var result = await Purchase.viewBuys(compareToken.id)
        if(result[0].length > 0){
          res.status(200).json(result[0])
        }else{
          res.status(200).json({msg:"Voce nao comprou nada"})
        }
    }catch(erro){
      res.status(500).json({erro})
    }
   

    
  }
}
module.exports = new PurchaseController