const knex = require('../database/database')
class UserPurchases{
  
   async viewBuys(id){
      try {
         var result = await knex.
         raw("select u.username,pd.name_product,pd.pricing from users u join purchase p on u.id = p.id_user join products pd on pd.id = id_product WHERE u.id ="+id)
         return result
      } catch (error) {
         throw error
      }
   }
   
}

module.exports = new UserPurchases