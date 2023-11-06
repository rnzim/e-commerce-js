const Purchase = require('../models/UserPurchases')
const jwt = require('jsonwebtoken')

class PurchaseController{
  async viewMyBuys(req,res){
     var id = req.userToken.id
     
  }
 
}
module.exports = new PurchaseController